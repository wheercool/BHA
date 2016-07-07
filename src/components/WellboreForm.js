import React from 'react'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import {reduxForm} from 'redux-form'

let WellboreForm = (props) => {
	const {fields: {name, shortName, description }} = props;
	const {disabled} = props;
	return ( <form>
		 
		 <FormGroup >
		  	<ControlLabel>Name</ControlLabel>
		    <FormControl type="text" placeholder="New Wellsite" {...name} disabled={disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Short Name</ControlLabel>
		    <FormControl type="text" placeholder="Short Name" {...shortName} disabled={disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Description</ControlLabel>
		    <FormControl componentClass="textarea"  placeholder="Description" {...description} disabled={disabled}/>
		</FormGroup>

		</form>)
}
WellboreForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'wellbore',                           // a unique name for this form
  fields: ['name', 'shortName', 'description'] // all the fields in your form
})(WellboreForm);


export default WellboreForm