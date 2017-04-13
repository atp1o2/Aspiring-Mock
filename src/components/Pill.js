import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../styles/variables';

const PillStyle = styled.div`
    font-size: 14px;
    display: inline-block;
    color: white;
    height: 1rem;
    border-radius: 10px;
    background-color: ${Brand.grey};
    margin-right: 0.2rem;
    padding: 0.4rem 0.5rem;
    span {
      text-align: center;
    }
`;

class Pill extends Component {
  render () {
    return (
      <PillStyle>
        <span>{this.props.label}</span>
      </PillStyle>
    );
  }
}

export default Pill;
