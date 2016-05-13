import React from 'react'
import WellsiteEditor from './WellsiteEditor'
import {Link} from 'react-router'

import {ListGroup, ListGroupItem, Button, Col, Glyphicon} from 'react-bootstrap'
import WellsiteList from './WellsiteList'

let ViewWellsite = props => {
		
		let wellsiteId = props.params.wellsiteId,
			wellsite = props.data.wellsites.filter(w => w.id == wellsiteId)[0],
			wellsiteName = wellsite.name;

		return (<div><h2 className="page-header">{wellsiteName} </h2>
			
			<Col sm={5}>
				<WellsiteList data={props.data} selectedWellsiteId={wellsiteId} />
				
			</Col>

			<Col sm={7}>
				<WellsiteEditor item={wellsite} wellsiteName={wellsiteName} disabled/>
				<Link to={"/wellsite/edit/" + wellsiteId} className="btn btn-primary">Edit</Link>
				<Link to="/wellsites" className="btn btn-default">Close</Link>
			</Col>
			
		</div>)
}


export default ViewWellsite