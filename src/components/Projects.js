import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

let Projects = (props) => {
	return (<div><h1 className="page-header">Projects</h1>

			<ListGroup>
				{props.data.projects.map((p, idx) => <ListGroupItem key={idx}>{p.name}</ListGroupItem>)}
			</ListGroup>
		</div>)
}

export default Projects