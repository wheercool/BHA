import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import WellsitesGrid from './WellsitesGrid'
import WellsiteWellsGrid from './WellsiteWellsGrid'

import Wellbores from './Wellbores'

let Wellsites = (props) => {
	const {params: { wellsiteId, wellId}, wellsites, wells, wellbores} = props,
		wellsite = wellsites.filter(w => w.id == wellsiteId)[0],
		wellsiteName = wellsite.name,
		well = wells.filter(w => w.id == wellId)[0],
		motherbore = wellbores.filter(w => w.id == well.motherbore)[0];

	
	return (<div>
			
		<WellsitesGrid 	data={props.wellsites} 
						baseUrl="/wellsites/byGrid"
						selectedId={wellsiteId} />
		
		<WellsiteWellsGrid data={props.wells} title={wellsiteName + " Wellsites"}/>

		<Wellbores wellbores={wellbores} motherbore={motherbore} />
		</div>)
}

let defaultMapProps = (state, props) => {
		
		let wellsites = state.main.wellsites,
			wellsiteId = props.params.wellsiteId,
			wells = wellsiteId? state.main.wells.filter(w => w.wellsiteId == wellsiteId): [];
		return {
			wellsites: wellsites,
			wells: wells,
			wellbores: state.main.wellbores

		}
	},
	id = x => x,
	mapDispatch = (dispath) => { return {}};

export default  connect(defaultMapProps, mapDispatch )(Wellsites);
