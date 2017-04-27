import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../styles/variables';
import DefaultProfile from '../img/default_profile.png';
import { getUser, getCompany } from '../server/railscope';


const ProfileCardStyle = styled.div`
  text-align: center;
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto;
  height: 20rem;
  margin-top: 3rem;
  .details {
    line-height: 1;
    margin-top: 2.5rem;
  }
  p {
    color: ${Brand.grey};
  }
  img {
    margin-top: -3rem;
    height: 12rem;
    width: 12rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
  }
`;

class ProfileCard extends Component {
  loadUser (id) {
    var self = this;
    getUser(id, (user) => {
      self.setState({
        user: user
      })
    })
  }

  loadCompany (id) {
    var self = this;
    getCompany(id, (company) => {
      self.setState({
        company: company
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      user: '',
      company: ''
    }
  }

  componentDidMount () {
    this.loadUser(this.props.data.user_id);
    this.loadCompany(this.props.data.company_id);
  }

  render () {
    let avatarImg = this.state.user.img_url === null ? DefaultProfile : this.state.user.img_url;
    return (
      <ProfileCardStyle>
        <img src={avatarImg} alt="Profile Card" />
        <div className="details">
          <h4>{this.state.user.first_name} {this.state.user.last_name}</h4>
          <p>WIP:this.state.user.title</p>
          <p>{this.state.company.name}</p>
        </div>
      </ProfileCardStyle>
    );
  };
}

export default ProfileCard;
