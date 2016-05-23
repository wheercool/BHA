import React from 'react'
import {Table, Col, Button, Panel, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'
import connect from './connect'
import WellsitesGrid from './WellsitesGrid'
import WellsiteWellsGrid from './WellsiteWellsGrid'
import WellsiteEditor from '../WellsiteEditor'

let Create = (props) => {
	let wellsiteId = props.params.wellsiteId;
	let buttonToolbar = <div><Button bsStyle="success">OK</Button>
				<Link to={'/wellsites/byGrid/view/' + wellsiteId} className="btn btn-default">Cancel</Link></div>,

		addHeader = <div><Glyphicon glyph="plus"/> Add Wellsite</div>;

	return (<div>
			
		<Col sm={6}>
			<WellsitesGrid data={props.wellsites} baseUrl="/wellsites/byGrid" selectedId={wellsiteId} />
			
			<WellsiteWellsGrid data={props.wells}/>
		</Col>

		<Col sm={6}>
			<Panel header={addHeader} footer={buttonToolbar}>
			<WellsiteEditor noChildren className="pull-right" baseUrl="/wellsites/byGrid" item={{}}/>
				</Panel>
			
		</Col>

		</div>)
}

export default  connect.defaultConnect(Create);
