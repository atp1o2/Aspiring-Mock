import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const SingleInput = (props) => (
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl
      className={props.className}
      name={props.name}
      type={props.type}
      value={props.content}
      onChange={props.onChange}
      placeholder={props.placeholder} />
  </FormGroup>
);

export default SingleInput;
