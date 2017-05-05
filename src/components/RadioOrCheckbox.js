import React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';

const RadioOrCheckbox = (props) => (
  <FormGroup controlId={props.name}>
    <ControlLabel>{props.label}</ControlLabel>
      <div className="checkbox-group">
      {props.options.map(opt => {
        return (
          <label key={opt} className="form-label capitalize">
            <input
              className="form-checkbox"
              name={props.name}
              onChange={props.onChange}
              value={opt}
              checked={ props.selectedOptions.indexOf(opt) > -1 }
              type={props.type} /> {opt}
          </label>
        );
      })}
    </div>
  </FormGroup>
);

// handleSelection (e) {
//   const newSelection = e.target.value;
//   let newSelectionArray;
//   if(this.state.selectedPets.indexOf(newSelection) > -1) {
//     newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
//   } else {
//     newSelectionArray = [...this.state.selectedPets, newSelection];
//   }
//     this.setState({ selectedPets: newSelectionArray });
// }

export default RadioOrCheckbox;


