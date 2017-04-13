import React, { Component } from 'react';
import { Page, Row, Column } from 'hedron';
import Button from '../components/Button';
import Pill from '../components/Pill';
import RequestCard from '../components/RequestCard/RequestCard';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import ConversationCard from '../components/ConversationCard/ConversationCard';
import AdvisorConversationCard from '../components/AdvisorConversationCard/AdvisorConversationCard';
import RecruitStudentCard from '../components/RecruitStudentCard/RecruitStudentCard';

class Components extends Component {
  talk () {
    alert("You pressed a button!")
  };

  render () {
    return (
      <div>
        <Page>
          <h1>Available Components</h1>
          <Row>
            <Column lg={12}>
              <h2>Buttons</h2>
            </Column>
            <Column lg={6}>
              <Button onClick={this.talk}>Normal Button</Button>
            </Column>
            <Column lg={6}>
              <Button small onClick={this.talk}>Small Button</Button>
            </Column>
            <Column lg={12}>
              <Button full onClick={this.talk}>Full Button</Button>
            </Column>
            <Column lg={12}>
              <Button small full onClick={this.talk}>Small Full Button</Button>
            </Column>
          </Row>
          <Row>
            <Column lg={12}>
              <p>hr default</p>
              <hr />
              <p>hr className="yellow"</p>
              <hr className="yellow" />
            </Column>
          </Row>
          <Row>
            <Column lg={12}>
              <h2>Pill</h2>
              <Pill label={"#tag"}/>
              <Pill label={"#Engineering"}/>
              <Pill label={"#Biochemistry"}/>
              <Pill label={"#International Studies"}/>
            </Column>
          </Row>
          <Row>
            <Column lg={6}>
              <h2>Profile Card</h2>
            </Column>
            <Column lg={6}>
              <h2>Request/Join Conversation Cards</h2>
            </Column>
            <Column lg={4}>
              <ProfileCard advisorId={1} />
            </Column>
            <Column lg={4}>
              <RequestCard advisorId={1} />
            </Column>
            <Column lg={4}>
              <RequestCard advisorId={1} />
            </Column>
          </Row>
          <Row>
            <Column lg={12}>
              <h2>Student - Upcoming ConversationCard</h2>
            </Column>
            <Column lg={12}>
              <ConversationCard advisorId={1} />
            </Column>
          </Row>
          <Row>
            <Column lg={12}>
              <h2>Advisor Upcoming/Past - AdvisorConversationCard</h2>
            </Column>
            <Column lg={12}>
              <AdvisorConversationCard advisorId={1} />
            </Column>
          </Row>
          <Row>
            <Column lg={12}>
              <h2>Recruiter - recruit student card</h2>
            </Column>
            <Column lg={12}>
              <RecruitStudentCard advisorId={1} />
            </Column>
          </Row>
        </Page>
      </div>
    );
  }
}

export default Components;
