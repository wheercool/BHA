import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import DoubleList from '../DoubleList'
// import connect from './connect'
import {connect} from 'react-redux'
import {removeWellsite} from 'actions'
let Wellsites = (props) => {
	const {onDelete, wellsites} = props;
	return (<div>			
			<Col sm={12}>
				<DoubleList data={wellsites} 
						baseUrl="wellsites/byList" 
						title="Wellsites"
						subTitle="Wells"
						onDelete={onDelete}/>
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
let mapDispatch = dispatch => {
		return {
			onDelete: id => {
				dispatch(removeWellsite(id))
			}
		}
}

export default  connect(mapProps, mapDispatch)(Wellsites);
