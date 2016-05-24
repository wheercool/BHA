import React from 'react'
import {Table, Col, Button, Panel, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'
import connect from './connect'
import WellsitesGrid from './WellsitesGrid'
import WellsiteWellsGrid from './WellsiteWellsGrid'
import WellsiteEditor from '../WellsiteEditor'

let Edit = (props) => {
		const {params: {wellsiteId}, wellsites, wells} = props;
	let wellsite = wellsites.filter(w => w.id == wellsiteId)[0];

	let buttonToolbar = <div><Button bsStyle="success">OK</Button>
				<Link to={'/wellsites/byGrid/view/' + wellsiteId} className="btn btn-default">Cancel</Link></div>,

				header = <div><Glyphicon glyph="pencil"/> Edit Wellsite</div>	
	return (<div>
			
		<Col sm={6}>
			<WellsitesGrid data={wellsites} baseUrl="/wellsites/byGrid" selectUrl="/wellsites/byGrid/edit" selectedId={wellsiteId} />
			
			<WellsiteWellsGrid data={wells}/>
		</Col>

		<Col sm={6}>
			<Panel header={header} footer={buttonToolbar}>
			<WellsiteEditor initialValues={wellsite} className="pull-right" baseUrl="/wellsites/byGrid" />
				</Panel>
			
		</Col>

		</div>)
}

export default  connect.defaultConnect(Edit);
