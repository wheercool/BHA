import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Col, Button, Panel, Glyphicon} from 'react-bootstrap'

import WellsiteEditor from '../WellsiteEditor'
import List from '../List'

let Edit = props => {
		let wellsiteId = props.params.wellsiteId,
			wellsite = props.wellsites.filter(w => w.id == wellsiteId)[0],
			wellsiteName = wellsite.name;

		let buttonToolbar = <div><Button bsStyle="success">OK</Button>
				<Link to={"/wellsites/byList/view/" + wellsiteId} className="btn btn-default">Cancel</Link></div>,

			header = <div><Glyphicon glyph="pencil"/> Edit Wellsite</div>	
		return (<div>	

			<Col sm={6} smOffset={3}>
				<Panel header={header} footer={buttonToolbar}>
					<WellsiteEditor initialValues={wellsite} wellsiteName={wellsiteName} />
					<List data={wellsite.wells} title="Wells"/>
				</Panel>
				
			</Col>
			
		</div>)
}

let mapProps = (state) => {
	var wellsites = state.main.wellsites.map(w => ({
		id: w.id,
		name: w.name,
		city: w.city,
		address: w.address,
		postcode: w.postcode,
		wells: state.main.wells.filter(well => well.wellsiteId == w.id)
	}));
	return {
		wellsites: wellsites
	}
}
let mapDispatch = (dispath) => { return {}};


export default connect(mapProps, mapDispatch)(Edit);