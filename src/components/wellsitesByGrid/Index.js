import React from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router'
import connect from './connect'
import WellsitesGrid from './WellsitesGrid'

let Wellsites = (props) => {
	return (<div>
			
		<WellsitesGrid data={props.wellsites} baseUrl="/wellsites/byGrid"/>

		</div>)
}

export default  connect.defaultConnect(Wellsites);
