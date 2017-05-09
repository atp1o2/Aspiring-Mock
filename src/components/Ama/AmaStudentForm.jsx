import React, { Component } from 'react';
import { postAma, postAmaQuestion } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import TextArea from '../TextArea';
import Button from '../Button';

const QuestionStyle = styled.div`
  button {
    float: right;
  }
  label {
    display: none;
  }
`;

class AmaStudentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      student: '',
      advisor: '',
      ama_question: '',
      ama: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  componentDidMount () {
    this.setState({
      student: this.props.student,
      advisor: this.props.advisor,
      ama: this.props.ama,
    })
    // If advisor doesn't have an AMA record
    // This will create one
    if (!this.props.ama) {
      postAma({advisor_id: this.props.advisor.id}, (data) => {
        console.log(data)
        this.setState({
          ama: data
        })
      });
    }
  }

  handleFormSubmit (e) {
    e.preventDefault();

    const newAmaQuestion = {
      ama_id: this.state.ama.id,
      text: this.state.ama_question,
      upvotes: 0,
      downvotes: 0,
      student_id: this.state.student.id,
      ama_answer: {text: ''},
    }

    let formPayload = {
      ama_question: {
        ama_id: this.state.ama.id,
        text: this.state.ama_question,
        upvotes: 0,
        downvotes: 0,
        student_id: this.state.student.id,
        ama_answer_attributes: {advisor_id: this.props.advisor.id, ama_id: this.state.ama.id},
      }
    };
    const payload = formPayload;
    postAmaQuestion(payload);
    this.props.addNewQuestion(newAmaQuestion);
    this.handleClearForm(e);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      ama_question: '',
    });
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <QuestionStyle>
        <Form onSubmit={this.handleFormSubmit}>
          <TextArea
          label={"Question"}
          rows={3}
          placeholder={"Ask this advisor a question!"}
          name={"ama_question"}
          content={this.state.ama_question}
          onChange={this.handleInputChange} />
          <Button type="submit">Submit</Button>
        </Form>
      </QuestionStyle>
    )
  }
}

export default AmaStudentForm;
