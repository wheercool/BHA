import React from 'react'
import {FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'

let WellboreForm = (props) => {
	const {fields: {name, shortName, description }} = props;
	const {disabled} = props;	
	return ( <form>
		 
		 <FormGroup >
		  	<ControlLabel>Name</ControlLabel>
		    <FormControl type="text" placeholder="New Wellsite" {...name} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Short Name</ControlLabel>
		    <FormControl type="text" placeholder="Short Name" {...shortName} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Description</ControlLabel>
		    <FormControl componentClass="textarea"  placeholder="Description" {...description} disabled={props.disabled}/>
		</FormGroup>

		</form>)
}

WellboreForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'wellbore',                           // a unique name for this form
  fields: ['name', 'shortName', 'description'] // all the fields in your form
})(WellboreForm);


export default WellboreForm