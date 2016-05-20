import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import List from '../List'
import connect from './connect'

let Wellsites = (props) => {
	return (<div><h4 className="page-header">All Wellsites </h4>
			
			<Col sm={5}>
				<List data={props.wellsites} baseUrl="wellsites/byList"/>
			</Col>

		</div>)
}

export default  connect.defaultConnect(Wellsites);
