import React from 'react'
import WellsiteEditor from './WellsiteEditor'
import {Link} from 'react-router'

import {ListGroup, ListGroupItem, Button, Col, Glyphicon} from 'react-bootstrap'


let EditWellsites = props => {
		console.log(props)
		let wellsiteId = props.params.wellsiteId,
			wellsiteName = props.data.wellsites.map(w => w.id == wellsiteId)[0].name;
		alert(wellsiteName)
		return (<div><h2 className="page-header">{wellsiteName}</h2>
			
			<Col sm={5}>
				<ListGroup>
					{props.data.wellsites.map((w, idx) => <ListGroupItem key={idx} className={wellsiteId == w.id? "active" : ""}>
							&nbsp;{w.name} 
							<Link to={"/wellsite/edit/" + w.id} className="pull-left"><Glyphicon glyph="edit" /></Link>
							<Link to={"/wellsites/remove/" + w.id} className="pull-right text-danger"><Glyphicon glyph="remove" /></Link>
							</ListGroupItem>)}
				</ListGroup>
				<Button>Add</Button>
			</Col>

			<Col sm={7}>
				<WellsiteEditor />
			</Col>
			
		</div>)
}


export default EditWellsites