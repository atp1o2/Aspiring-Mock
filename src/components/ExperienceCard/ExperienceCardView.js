import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';

const Card = styled.div`
  text-align: center;
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  min-width: 25rem;
  max-width: 25rem;
  height: 20rem;
  padding: 1rem;
  margin-top: 1.5rem;
  .details {
    line-height: 2;
    margin-top: 2.5rem;
  }
  p {
    color: ${Brand.grey};
  }
`;

class ExperienceCardView extends Component {
  render () {
    return (
      <Card>
        <div className="details">
          <h4>{this.props.experience.name}</h4>
          <hr />
          <p>From: {this.props.experience.start} To: {this.props.experience.end}</p>
          <p>Position: {this.props.experience.summary}</p>
        </div>
      </Card>
    );
  };
}

export default ExperienceCardView;
