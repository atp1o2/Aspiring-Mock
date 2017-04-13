import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import Button from '../Button';

const Card = styled.div`
  color: ${Brand.grey};
  text-align: center;
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: 15rem;
  height: 13rem;
  padding: 0 0.5rem;

  h3 {
    line-height: 2;
  }
`;

class RequestCardView extends Component {
  render () {
    let details;
    if (this.props.data) {
      details = (
        <div>
          <p>{this.props.data.availableDate}</p>
          <h2>{this.props.data.availableSpots}</h2>
          <p>Spots Available</p>
          <Button small>{this.props.data.availableTime}</Button>
        </div>
      )
    } else {
      details = (
        <div>
          <h3>Let this advisor know you would like to chat.</h3>
          <Button small>Request</Button>
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
