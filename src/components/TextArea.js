import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const TextArea = (props) => (
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
    <FormControl
      componentClass="textarea"
      rows={props.rows}
      name={props.name}
      value={props.content}
      placeholder={props.placeholder}
      onChange={props.onChange} />
  </FormGroup>
);

export default TextArea;
