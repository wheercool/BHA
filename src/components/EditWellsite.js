import React from 'react'
import WellsiteEditor from './WellsiteEditor'
import {Link} from 'react-router'

import {ListGroup, ListGroupItem, Button, Col, Glyphicon} from 'react-bootstrap'
import WellsiteList from './WellsiteList'

let EditWellsite = props => {
		console.log('Edit Wellsite')
		let wellsiteId = props.params.wellsiteId,
			wellsite = props.data.wellsites.filter(w => w.id == wellsiteId)[0],
			wellsiteName = wellsite.name;

		return (<div><h2 className="page-header">{wellsiteName} </h2>
			
			<Col sm={5}>
				<WellsiteList data={props.data} selectedWellsiteId={wellsiteId}/>
			</Col>

			<Col sm={7}>
				<WellsiteEditor item={wellsite} wellsiteName={wellsiteName}/>
				<Button bsStyle="success">OK</Button>
				<Link to={"/wellsite/view/" + wellsiteId} className="btn btn-default">Cancel</Link>
			</Col>
			
		</div>)
}


export default EditWellsite