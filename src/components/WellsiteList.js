import React from 'react'
import {ListGroup, ListGroupItem, Button, Col, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'

let WellsiteList = (props) => {
	return (<div>
				
			
				<ListGroup>
					{props.data.wellsites.map((w, idx) => <ListGroupItem key={idx} className={props.selectedWellsiteId == w.id? "active" : ""}>
							{props.selectedWellsiteId == w.id? w.name : <Link to={"/wellsite/view/" + w.id}>{w.name} </Link>}
							<Link to={"/wellsites/remove/" + w.id} className="pull-right text-danger"><Glyphicon glyph="remove" /></Link>
							</ListGroupItem>)}
				</ListGroup>
				<Link to="/wellsite/add/" className="btn btn-default">Add</Link>			
		</div>)
}

export default WellsiteList