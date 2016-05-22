import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import List from '../DoubleList'
// import connect from './connect'
import {connect} from 'react-redux'
let Wellsites = (props) => {
	return (<div>			
			<Col sm={12}>
				<List data={props.wellsites} baseUrl="wellsites/byList" title="Wellsites" subTitle="Wells"/>
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

export default  connect(mapProps, dispatch)(Wellsites);
