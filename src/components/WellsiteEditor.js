import React from 'react'
import {FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap'
import {Link} from 'react-router'
let WellsiteEditor = (props) => {

	return ( <form>
		 
		 <FormGroup >
		  	<ControlLabel>Name</ControlLabel>
		    <FormControl type="text" placeholder="New Wellsite" key={props.item.name} defaultValue={props.wellsiteName} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>City</ControlLabel>
		    <FormControl type="text" placeholder="City" key={props.item.city} defaultValue={props.item.city} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Address</ControlLabel>
		    <FormControl type="text" placeholder="Address" key={props.item.address} defaultValue={props.item.address} disabled={props.disabled}/>
		</FormGroup>

		 <FormGroup>
		  	<ControlLabel>Postcode</ControlLabel>
		    <FormControl type="Postcode" placeholder="Postcode" key={props.item.postcode} defaultValue={props.item.postcode} disabled={props.disabled}/>
		</FormGroup>		

		
		</form>)
}

export default WellsiteEditor