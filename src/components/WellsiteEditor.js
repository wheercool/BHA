import React from 'react'
import {FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'

let WellsiteEditor = (props) => {
	const {fields: {name, city, address, postcode}} = props;
	return ( <form>
		 
		 <FormGroup >
		  	<ControlLabel>Name</ControlLabel>
		    <FormControl type="text" placeholder="New Wellsite" {...name} key={props.item.name} defaultValue={props.wellsiteName} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>City</ControlLabel>
		    <FormControl type="text" placeholder="City" {...city} key={props.item.city} defaultValue={props.item.city} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Address</ControlLabel>
		    <FormControl type="text" placeholder="Address" {...address} key={props.item.address} defaultValue={props.item.address} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Postcode</ControlLabel>
		    <FormControl type="Postcode" placeholder="Postcode" {...postcode} key={props.item.postcode} defaultValue={props.item.postcode} disabled={props.disabled}/>
		</FormGroup>
		
		</form>)
}

WellsiteEditor = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'wellsite',                           // a unique name for this form
  fields: ['name', 'city', 'address', 'postcode'] // all the fields in your form
})(WellsiteEditor);


export default WellsiteEditor