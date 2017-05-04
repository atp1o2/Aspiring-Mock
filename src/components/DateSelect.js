import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

const DateSelect = (props) => (
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
    <DatePicker
      name={props.name}
      onChange={props.onChange} />
    </FormGroup>
);

export default DateSelect;
