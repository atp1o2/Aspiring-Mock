import React, { Component } from 'react';
import { postEducation, getAllSchools, getAllMajors } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import Select from '../Select';
import Button from '../Button';

class ProfileForm extends Component {
  loadAllSchools () {
    var self = this;
    getAllSchools((data) => {
      self.setState({
        all_schools: data
      })
    })
  }

  loadAllMajors () {
    var self = this;
    getAllMajors((data) => {
      self.setState({
        all_majors: data,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      all_schools: [],
      all_majors: [],
      school: '',
      major: '',
      degree_type: '',
      start_date: '',
      end_date: '',
      gpa: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount () {
    this.loadAllSchools();
    this.loadAllMajors();
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  // Lift into helper
  checkRecords (list, key, value) {
    let object;
    list.some((element) => {
      if (element[key] === value) {
        return object = element
      }
    })
    return object;
  }

  handleFormSubmit (e) {
    e.preventDefault();
    let major_key, major_val, school_key, school_val;
    const checkMajor = this.checkRecords(this.state.all_majors, 'name', this.state.major);
    const checkSchool = this.checkRecords(this.state.all_schools, 'name', this.state.school);
    // Lift into helper
    if (checkMajor) {
      major_key = "major_id";
      major_val = checkMajor.id;
    }
    else {
      major_key = "major_attributes";
      major_val = {"name": this.state.major};
    }
    if (checkSchool) {
      school_key = "school_id";
      school_val = checkSchool.id;
    }
    else {
      school_key = "school_attributes";
      school_val = {"name": this.state.school};
    }

    // DEGREE TYPE NOT SAVING PROPERLY
    let formPayload = {
      education: {
        student_id: this.props.user.id,
        degree_type: this.state.degree_type,
        end_date: this.state.end_date + "-01 00:00:00",
        gpa: this.state.gpa
      }
    };

    formPayload.education[major_key] = major_val;
    formPayload.education[school_key] = school_val;
    const payload = formPayload;
    console.log('Send this in a POST request:', payload);
    postEducation(formPayload);
    this.loadAllSchools();
    this.loadAllMajors();
    this.handleClearForm();
  }

  handleClearForm (e) {
    this.setState({
      school: '',
      major: '',
      degree_type: '',
      start_date: '',
      end_date: '',
      gpa: ''
    });
  }

  render () {
    if (this.state.loading) {
      return <div>Loading...</div>
    }
    else  {
      return (
        <Form onSubmit={this.handleFormSubmit}>
          {/* Should have a list of all schools text/select input */}
          <SingleInput
            label={"School"}
            name={"school"}
            type={"text"}
            content={this.state.school}
            onChange={this.handleInputChange} />
          <Select
            label={"Degree"}
            name={"degree_type"}
            content={this.state.degree_type}
            options={['Associates', 'Bachelors', 'Masters', 'PhD']}
            onChange={this.handleInputChange} />
          {/* Should have a list of all majors text/select input */}
          <SingleInput
            label={"Major"}
            name={"major"}
            type={"text"}
            content={this.state.major}
            onChange={this.handleInputChange} />
          <SingleInput
            label={"Graduation Date"}
            name={"end_date"}
            type={"month"}
            content={this.state.end_date}
            onChange={this.handleInputChange} />
          <SingleInput
            label={"G.P.A."}
            name={"gpa"}
            type={"number"}
            content={this.state.gpa}
            onChange={this.handleInputChange} />
          <Button type="submit">Add</Button>
        </Form>
      );
    }
  }
}

export default ProfileForm;
