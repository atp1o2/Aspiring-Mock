import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import RecruitStudentCard from '../../../components/RecruitStudentCard/RecruitStudentCard';

class RecruitStudentsView extends Component {
  render () {
    let studentsList = [];
    this.props.data.map((student) =>
      studentsList.push(
        <Row>
          <RecruitStudentCard data={student} />
        </Row>
      )
    )

    return (
      <Grid className="text-center">
        <Row>
          <h1>Recruit Students</h1>
          <hr className="yellow"/>
        </Row>
        <Row>
          <Col sm={12} md={2}>
            <h3>Filter Students</h3>
          </Col>
          <Col sm={12} md={10}>
            {studentsList}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RecruitStudentsView;
