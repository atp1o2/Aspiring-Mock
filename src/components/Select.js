import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const Select = (props) => (
    <FormGroup controlId={props.name}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl
        className={props.className}
        componentClass="select"
        name={props.name}
        defaultValue={props.selectOption}
        onChange={props.onChange}>
        <option value={props.selectOption}>{props.selectOption}</option>
        {props.options.map(opt => {
          return (<option key={opt} value={opt}>{opt}</option>);
        })}
      </FormControl>
    </FormGroup>
);

export default Select;
