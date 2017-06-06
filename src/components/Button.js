import styled from 'styled-components';
import Brand from '../styles/variables';

const Button = styled.button`
  font-size: 16px;
  background-color: ${Brand.yellow};
  border: none;
  border-radius: 2px;
  min-width: 16rem;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  width: ${props => props.full ? '100%' : 'auto'};
  padding: ${props => props.small ? '0.5rem 1.5rem' : '1rem'};
  margin: 0.5rem 0.5rem;

  &:hover {
    background-color: ${Brand.darkYellow};
  }
`;

export default Button;
