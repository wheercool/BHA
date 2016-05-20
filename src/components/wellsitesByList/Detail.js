import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap'

import WellsiteEditor from '../WellsiteEditor'
import List from '../List'

let Detail = props => {
		
		let wellsiteId = props.params.wellsiteId,
			wellsite = props.wellsites.filter(w => w.id == wellsiteId)[0],
			wellsiteName = wellsite.name;

		return (<div><h4 className="page-header">{wellsiteName} </h4>
			
			<Col sm={5}>
				<List data={props.wellsites} selectedId={wellsiteId} baseUrl="wellsites/byList"/>
				
			</Col>

			<Col sm={7}>
				<WellsiteEditor item={wellsite} wellsiteName={wellsiteName} disabled/>
				<Link to={"/wellsites/byList/edit/" + wellsiteId} className="btn btn-primary">Edit</Link>
				<Link to="/wellsites/byList" className="btn btn-default">Close</Link>
			</Col>
			
		</div>)
}

let mapProps = (state) => {
	let wellsites = state.main.wellsites;

	return {
		wellsites: wellsites
	}
}

let mapDispatch = (dispath) => { return {}};


export default connect(mapProps, mapDispatch)(Detail);
