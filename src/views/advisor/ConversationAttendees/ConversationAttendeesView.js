import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import RecruitStudentCard from '../../../components/RecruitStudentCard/RecruitStudentCard';
import styled from 'styled-components';
import Brand from '../../../styles/variables';
import { getTime, getDate, getDay } from '../../../helpers/ParseTimestamp';

const DateCard = styled.div`
  margin: 0 auto;
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: 40rem;
  height: 23rem;
  padding: 2rem;
`;

class ConversationAttendees extends Component {
  render () {
    let size = 10;
    const studentsList = this.props.students.slice(0, size).map((student) =>
        <Row key={student.id}>
          <RecruitStudentCard student={student} />
        </Row>
    )

    return (
      <Grid className="text-center">
        <Row>
          <h1>Conversation Attendees</h1>
          <hr className="yellow"/>
        </Row>
        <Row>
          <DateCard>
            <h3>Appointment</h3>
            <hr />
            <p className="h4">{getDate(this.props.conversation.datetime)}</p>
            <p className="h4">{getTime(this.props.conversation.datetime)}</p>
            <p className="h4">{getDay(this.props.conversation.datetime)}</p>
          </DateCard>
        </Row>
        <Row>
          <Col sm={12}>
            {studentsList}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ConversationAttendees;
