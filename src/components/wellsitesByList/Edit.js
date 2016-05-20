import React from 'react'
import {Link} from 'react-router'
import {Col, Button} from 'react-bootstrap'

import List from '../List'
import WellsiteEditor from '../WellsiteEditor'
import connect from './connect'

let Edit = props => {
		let wellsiteId = props.params.wellsiteId,
			wellsite = props.wellsites.filter(w => w.id == wellsiteId)[0],
			wellsiteName = wellsite.name;

		return (<div><h2 className="page-header">{wellsiteName} </h2>
			
			<Col sm={5}>
				<List data={props.wellsites} selectedId={wellsiteId} baseUrl="wellsites/byList"/>
			</Col>

			<Col sm={7}>
				<WellsiteEditor item={wellsite} wellsiteName={wellsiteName} />
				<Button bsStyle="success">OK</Button>
				<Link to={"/wellsites/byList/view/" + wellsiteId} className="btn btn-default">Cancel</Link>
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


export default connect.defaultConnect(Edit);