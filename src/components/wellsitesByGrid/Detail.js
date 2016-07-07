import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router'
import WellsitesGrid from './WellsitesGrid'
import WellsiteWellsGrid from './WellsiteWellsGrid'
import {connect} from 'react-redux'


let Wellsites = (props) => {
	const {wellsiteId, wellsites, wells, wellsitePage, wellsitesLoading, wellsiteTotalPages} = props;
	const wellsiteName = props.wellsites.filter(w => w.id == wellsiteId)[0].name;

	return (<div>
		{wellsitesLoading?<h1>Loading Wellsites...</h1>
		: 	
		<WellsitesGrid 	data={wellsites}
						page={wellsitePage}
						totalPages={wellsiteTotalPages} 
						baseUrl="/wellsites/byGrid"
						selectedId={wellsiteId} 
						location={location}/>
		
		}
		<WellsiteWellsGrid 	data={wells} 
							title={wellsiteName + " Wells"}
							baseUrl={'/wellsites/byGrid/view/' + wellsiteId}/>

		</div>)
}

let defaultMapProps = (state, props) => {
		const wellsites = state.main.wellsites,
			  wellsitesLoading = state.main.wellsitesLoading,
			  wellsiteTotalPages = state.main.wellsitesTotalPages,
			  wellsitePage = +(props.location.query.wellsite_page || 1);

		return {
			wellsites: wellsites,
			wellsitesLoading: wellsitesLoading,
			wellsiteTotalPages: wellsiteTotalPages,
			wellsitePage: wellsitePage,
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
export default connect(defaultMapProps, mapDispatch)(Wellsites);
