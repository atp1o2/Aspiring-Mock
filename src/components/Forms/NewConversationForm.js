import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { postNewConversation } from '../../server/railscope';
import SingleInput from '../SingleInput';
import Select from '../Select';
import Button from '../Button';

class NewConversationForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      advisor: '',
      date: '',
      time: '',
      capacity: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount () {
    this.setState({
      advisor: this.props.advisor
    })
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const date = new Date(this.state.date + "T" + this.state.time);
    const formPayload = {
      conversation: {
        advisor_id: this.state.advisor.id,
        url: 'https://appear.in/' + date,
        // capacity: this.state.capacity,
        capacity: 4,
        date: date,
        conversation_attendance: [],
        id: date,
      }
    };
    const payload = formPayload;
    postNewConversation(payload, (data) => {
      this.props.addNewConversationToView(data);
    });
    this.handleClearForm(e);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      capacity: '',
      date: ''
    })
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Row>
          <Col xs={12} sm={5}>
            <SingleInput
              label={"Appointment Date"}
              name={"date"}
              type={"date"}
              content={this.state.date}
              onChange={this.handleInputChange} />
          </Col>
          <Col xs={12} sm={5}>
            <SingleInput
              label={"Start Time"}
              name={"time"}
              type={"time"}
              content={this.state.time}
              onChange={this.handleInputChange} />
          </Col>
          <Col xs={12} sm={2}>
           <Button type="submit" className="mt-2">Add</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default NewConversationForm;
