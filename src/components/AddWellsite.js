import React from 'react'
import WellsiteEditor from './WellsiteEditor'
import {Link} from 'react-router'

import {ListGroup, ListGroupItem, Button, Col, Glyphicon} from 'react-bootstrap'
import WellsiteList from './WellsiteList'

let AddWellsite = props => {
		console.log(props)
		let wellsiteId = props.params.wellsiteId;

		return (<div><h2 className="page-header">New Wellsite </h2>
			
			<Col sm={5}>
				<WellsiteList data={props.data} />
			</Col>

			<Col sm={7}>
				<WellsiteEditor type="add" item={{}}/>

				<Button bsStyle="success">Create</Button>
				<Link to="/wellsites" className="btn btn-default">Close</Link>
			</Col>
			
		</div>)
}


export default AddWellsite