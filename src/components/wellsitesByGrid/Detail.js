import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router'
import connect from './connect'
import WellsitesGrid from './WellsitesGrid'
import WellsiteWellsGrid from './WellsiteWellsGrid'

let Wellsites = (props) => {
	let wellsiteId = props.params.wellsiteId;

	return (<div>
			
		<WellsitesGrid data={props.wellsites} baseUrl="/wellsites/byGrid" selectedId={wellsiteId} />
		
		<WellsiteWellsGrid data={props.wells}/>

		</div>)
}

export default  connect.defaultConnect(Wellsites);
