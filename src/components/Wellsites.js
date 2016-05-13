import React from 'react'
import {ListGroup, ListGroupItem, Button, Col, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'
import WellsiteEditor from './WellsiteEditor'
import WellsiteList from './WellsiteList'

let Wellsites = (props) => {
	return (<div><h2 className="page-header">Wellsites </h2>
			
			<Col sm={5}>
				<WellsiteList data={props.data}/>
			</Col>

			
		</div>)
}

export default Wellsites