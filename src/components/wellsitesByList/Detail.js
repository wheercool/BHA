import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Col, FormGroup} from 'react-bootstrap'

import WellsiteEditor from '../WellsiteEditor'
import List from '../List'

let Detail = props => {
		
		let wellsiteId = props.params.wellsiteId,
			wellsite = props.wellsites.filter(w => w.id == wellsiteId)[0],
			wellsiteName = wellsite.name;

		return (<div>
			
			<Col sm={6} smOffset={3}>
				<WellsiteEditor initialValues={wellsite} disabled/>
				
				<List data={wellsite.wells} disabled title="Wells"/>
				

				<Link to={"/wellsites/byList/edit/" + wellsiteId} className="btn btn-primary">Edit</Link>
				<Link to="/wellsites/byList" className="btn btn-default">Close</Link>
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
let dispatch = (d) => {return {}}

export default connect(mapProps, dispatch)(Detail);
