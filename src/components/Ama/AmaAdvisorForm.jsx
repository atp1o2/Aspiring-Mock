import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { getFullStudent, answerAma } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import TextArea from '../TextArea';
import Button from '../Button';
import { getTime, getDate, getDay } from '../../helpers/ParseTimestamp';

const AmaStyle = styled.div`
  border: ${Brand.greyBorder};
  min-width: auto;
  min-height: auto;
  text-align: left;
  .question {
    a {
      text-decoration: underline;
    }
  }
  .answer {

  }
`;

class AmaAdvisorsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      advisor: '',
      student: '',
      school: '',
      ama: '',
      ama_question: '',
      ama_answer: null,
      new_answer: '',
      loading: true,
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  componentDidMount () {
    this.setState({
      advisor: this.props.advisor,
      ama: this.props.ama,
      ama_answer: this.props.ama.ama_answer.text,
    })
    this.loadStudent(this.props.ama.student_id);
  }

  loadStudent (id) {
    var self = this;
    getFullStudent (id, (data) => {
      self.setState({
        student: data,
        loading: false
      })
    })
  }

  submitAnswer (ama_answer) {
    this.setState({
      ...this.state,
      ama_answer: ama_answer
    })
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      ama_answer: {
        text: this.state.new_answer
      }
    };
    answerAma(this.props.ama.id, formPayload);
    this.submitAnswer(this.state.new_answer)
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
    if (this.state.loading) {
      return <div></div>
    } else {
      let answer;
      if (!this.state.ama_answer && this.state.advisor.user_id === this.props.logged_user.id) {
        answer = (
        <Col xs={10} xsOffset={2}>
          <Form onSubmit={this.handleFormSubmit}>
            <TextArea
            label={"Answer"}
            rows={3}
            name={"new_answer"}
            content={this.state.new_answer}
            onChange={this.handleInputChange} />
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
        )
      } else if (this.state.ama_answer) {
        answer = (
          <Col xs={10} xsOffset={2} sm={8} smOffset={3}>
            <div className="answer">
              <p>{this.state.ama_answer}</p>
              <a href="#">Edit</a>
            </div>
          </Col>
        )
      }
      return (
        <AmaStyle>
          <Row>
            <Col xs={2}>
              Upvotes
            </Col>
            <Col xs={10}>
              <div className="question">
                <p className="h4">{this.state.ama.text}</p>
                <p>
                  Post by &nbsp;
                  <Link to={`Students/${this.state.student.id}/Profile`}>
                    {this.state.student.first_name} {this.state.student.last_name}
                  </Link>
                  &nbsp; at {this.state.student.schools[0].name} on {getDate(this.state.ama.created_at)}
                </p>
                <hr />
              </div>
            </Col>
          </Row>
          <Row>
            {answer}
          </Row>
        </AmaStyle>
      )
    }
  }
}

export default AmaAdvisorsForm;
