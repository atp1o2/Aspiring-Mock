import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import RecruitStudentCard from '../../../components/RecruitStudentCard/RecruitStudentCard';

class RecruitStudentsView extends Component {
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
          <h1>Recruit Students</h1>
          <hr className="yellow"/>
        </Row>
        <Row>
          <Col sm={12} md={2}>
            <h3>Filter Students</h3>
            <p>Make this fixed position</p>
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
