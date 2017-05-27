import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import AmaAdvisorForm from './AmaAdvisorForm';
import AmaStudentForm from './AmaStudentForm';

class AmaView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ama_questions: []
    }
    this.addNewQuestion = this.addNewQuestion.bind(this);
  }

  componentDidMount () {
    this.setState({
      ama_questions: this.props.amas.ama_questions === undefined ? [] : this.props.amas.ama_questions
    })
  }

  addNewQuestion (question) {
    this.setState({
      ...this.state,
      ama_questions: this.state.ama_questions.concat(question)
    })
  }

  render () {
    let amaList;
    let questionForm;

    if (this.state.ama_questions.length > 0) {
      amaList = this.state.ama_questions.reverse().map((ama) =>
        <Row key={ama.id}>
          <AmaAdvisorForm
            logged_user={this.props.logged_user}
            advisor={this.props.advisor}
            ama={ama} />
        </Row>
      )
    }
    else {
      amaList = <p>No AMAs yet!</p>
    }
    if (this.props.logged_user.role === "student") {
      questionForm = (
        <Row>
          <AmaStudentForm
            addNewQuestion={this.addNewQuestion}
            ama={this.props.amas}
            advisor={this.props.advisor}
            student={this.props.logged_user} />
        </Row>
      )
    }
    return (
      <div>
        {questionForm}
        {amaList}
      </div>
    )
  }
}

export default AmaView;
