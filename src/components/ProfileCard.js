import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../styles/variables';
import DefaultProfile from '../img/default_profile.png';

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
  render () {
    let avatarImg = this.props.avatar ? this.props.avatar : DefaultProfile;
    return (
      <ProfileCardStyle>
        <img src={avatarImg} alt="Profile Card" />
        <div className="details">
          <h4>{this.props.data.name}</h4>
          <p>{this.props.data.title}</p>
          <p>{this.props.data.company}</p>
        </div>
      </ProfileCardStyle>
    );
  };
}

export default ProfileCard;
