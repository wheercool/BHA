import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import List from '../List'
import connect from './connect'

let Wellsites = (props) => {
	return (<div>			
			<Col sm={12}>
				<List data={props.wellsites} baseUrl="wellsites/byList"/>
			</Col>

		</div>)
}

export default  connect.defaultConnect(Wellsites);
