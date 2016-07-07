import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router'
import WellsitesGrid from './WellsitesGrid'
import {getWellsites} from 'actions'
import {connect} from 'react-redux'

let Wellsites = (props) => {
	const {wellsites, loading, totalPages, page, location} = props;
	return (<div>			
		{loading? <h1>Loading...</h1>
			: <WellsitesGrid loading={loading} 
			page={page}
			totalPages={totalPages}
			data={wellsites}
			baseUrl="/wellsites/byGrid"
			location={location}/>}
		</div>)
}

let defaultMapProps = (state, props) => {
		const wellsites = state.main.wellsites,
			  wellsitesLoading = state.main.wellsitesLoading,
			  totalPages = state.main.wellsitesTotalPages,
			  page = +(props.location.query.page || 1);

		return {
			wellsites: wellsites,
			loading: wellsitesLoading,
			totalPages: totalPages,
			page: page,
			location: props.location
		}
};

let mapDispatch = (dispath, p) => {
	
	const {page = 1, filter = ''} = p.location.query
	setTimeout(() => {
		dispath(getWellsites(page, filter))
	}, 0); //setTimeout fixes erros in console from react 
	return {}
};

export default  connect(defaultMapProps, mapDispatch)(Wellsites);
