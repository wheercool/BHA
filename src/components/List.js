import React from 'react'
import {ListGroup, ListGroupItem, Col, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'

let List = (props) => {
	return (<div>
				<ListGroup>
					{props.data.map((w, idx) => <ListGroupItem key={idx} className={props.selectedId == w.id? "active" : ""}>
							{props.selectedId == w.id? w.name : <Link to={props.baseUrl + '/view/' + w.id}>{w.name} </Link>}
							<Link to={props.baseUrl + '/remove/' + w.id} className="pull-right text-danger"><Glyphicon glyph="remove" /></Link>
							</ListGroupItem>)}
				</ListGroup>
				<Link to={props.baseUrl + "/add/"} className="btn btn-default">Add</Link>			
		</div>)
}

export default List