import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import DefaultProfile from '../../img/default_profile.png';

const ProfileCard = styled.div`
  text-align: center;
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: 18rem;
  height: 13rem;
  p {
    color: ${Brand.grey};
  }
  img {
    margin-top: -2rem;
    height: 9rem;
    width: 9rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
  }
`;

class ProfileCardView extends Component {
  render () {
    let avatarImg = this.props.avatar ? this.props.avatar : DefaultProfile;
    return (
      <ProfileCard>
        <img src={avatarImg} alt="Profile Card" />
        <h4>{this.props.name}</h4>
        <p>{this.props.title}</p>
      </ProfileCard>
    );
  };
}

export default ProfileCardView;
