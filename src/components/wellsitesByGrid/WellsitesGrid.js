import React, {Component} from 'react'
import {Table, ButtonGroup, Button, Panel} from 'react-bootstrap'
import {Link} from 'react-router'
import classNames from 'classNames'
import { hashHistory } from 'react-router'

let onClick = (id, baseUrl, deselect) => {
	hashHistory.push(deselect? baseUrl: baseUrl + '/view/' + id)
}
class WellsitesGrid extends Component {
	render() {
		let props = this.props,
			className = (w) => classNames({active: w.id == props.selectedId});

		let buttonToolbar = <ButtonGroup>
				<Button bsStyle="success">Add</Button>
				<Link 	to={props.baseUrl + '/edit/' + props.selectedId} 
						className="btn btn-primary" 						
						disabled={!props.selectedId}>Edit</Link>
				<Button bsStyle="danger" disabled={!props.selectedId}>Delete</Button>
			</ButtonGroup>;

		return (<Panel header="Wellsites" footer={buttonToolbar} bsStyle="primary">
			<Table hover >
				<thead>
					<tr>
						<th></th>
						<th>Id</th>
						<th>Name</th>
						<th>City</th>
						<th>Address</th>
						<th>Postcode</th>
					</tr>
				</thead>

				<tbody>
					{props.data.map((w, idx) =><tr key={idx} className={className(w)} onClick={onClick.bind(null, w.id, props.baseUrl, props.selectedId == w.id)} >
							<td><input type="checkbox" checked={w.id == props.selectedId} readOnly/></td>
							<td>{w.id}</td>
							<td>{w.name}</td>
							<td>{w.city}</td>
							<td>{w.address}</td>
							<td>{w.postcode}</td>
						</tr>)}
				</tbody>
			</Table>
			
		</Panel>)


	}
}


export default  WellsitesGrid;
