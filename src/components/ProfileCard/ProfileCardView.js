import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import DefaultProfile from '../../img/default_profile.png';
import { Link } from 'react-router';

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
    let avatarImg = this.props.user.img_url ?  this.props.user.img_url : DefaultProfile;
    return (
      <ProfileCardStyle>
        <Link to={`Advisors/${this.props.user.id}/Profile`}>
          <img src={avatarImg} alt="Profile Card" />
        </Link>
        <div className="details">
          <Link to={`Advisors/${this.props.user.id}/Profile`}>
            <h4>{this.props.user.first_name} {this.props.user.last_name}</h4>
          </Link>
          <p>{this.props.user.job_title ? this.props.user.job_title : "Advisor"}</p>
          <p>{this.props.company.name}</p>
        </div>
      </ProfileCardStyle>
    );
  };
}

export default ProfileCard;
