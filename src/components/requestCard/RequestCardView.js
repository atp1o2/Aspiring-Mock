import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import Button from '../Button';

const Card = styled.div`
  color: ${Brand.grey};
  text-align: center;
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto;
  height: 20rem;
  padding: 2rem 1rem;
  margin-top: 3rem;
  margin-left: 1rem;

  h4 {
    line-height: 2;
  }
`;

class RequestCardView extends Component {
  render () {
    let details;
    if (!this.props.data) {
      details = (
        <div>
          <h4>Let this advisor know you would like to chat.</h4>
          <Button small>Request</Button>
        </div>
      )
    } else {
      details = (
        <div>
          <p>{this.props.data.availableDate}</p>
          <h2>{this.props.data.availableSpots}</h2>
          <p>Spots Available</p>
          <Button small>{this.props.data.availableTime}</Button>
        </div>
      )
    };

    return (
      <Card>
        {details}
      </Card>
    );
  };
}

export default RequestCardView;
