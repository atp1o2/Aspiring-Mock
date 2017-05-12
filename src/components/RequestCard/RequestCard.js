import React, { Component } from 'react';
import RequestCardView from './RequestCardView';
import { getAdvisorConversations, joinConversationAttendances, getStudentConversations } from '../../server/railscope';
import withIdentity from '../Identity/withIdentity';

class RequestCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      conversations: [],
      conversation_attendances: [],
    }
    this.joinConversation = this.joinConversation.bind(this);
  }

  componentDidMount () {
    this.loadAdvisorConversations(this.props.advisor.id);
  }

  loadAdvisorConversations (id) {
    var self = this;
    getAdvisorConversations(id, (data) => {
      self.setState({
        conversations: data
      })
    })
  }

  joinConversation (conversation) {
    getStudentConversations(this.props.identity.id, (data) => {
      if (data.length > 0) {
        let attendance_convoIds = data.map((convo) => {
          return convo.conversation_id;
        })
        if (attendance_convoIds.includes(conversation.id)) {
          alert("You've already joined this conversation.")
          return;
        } else {
          const payload = {
            conversation_attendance: {
              student_id: this.props.identity.profile_id,
              conversation_id: conversation.id,
            }
          }
          joinConversationAttendances(payload, (data) => {
            console.log('Successfully joined conversation.')
          });
        }
      }
    })
  }

  render () {
    return (
      <RequestCardView
        onClick={this.joinConversation}
        conversations={this.state.conversations} />
    )
  };
}

const RequestCardWithIdentity = withIdentity(RequestCard);
export default RequestCardWithIdentity;
