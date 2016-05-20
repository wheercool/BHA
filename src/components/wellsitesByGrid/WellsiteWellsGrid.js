import React, {Component} from 'react'
import {Table, ButtonGroup, Button, Panel} from 'react-bootstrap'
import {Link} from 'react-router'
import classNames from 'classNames'
import { hashHistory } from 'react-router'

let onClick = (id, baseUrl) => {
	hashHistory.push(baseUrl + '/view/' + id)
}
class WellsiteWellsGrid extends Component {
	render() {
		let props = this.props;
		let buttonToolbar = <ButtonGroup>
				<Button bsStyle="success">Add</Button>
				<Button bsStyle="primary" disabled={!props.selectedId}>Edit</Button>
				<Button bsStyle="danger" disabled={!props.selectedId}>Delete</Button>
			</ButtonGroup>;

		return (<Panel header="Wells" footer={buttonToolbar} bsStyle="success">
			<Table hover >
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>North/South Offset</th>
						<th>East/West Offset</th>
						<th>Mothebore</th>
					</tr>
				</thead>

				<tbody>
					{props.data.map((w, idx) =><tr key={idx} className={classNames({active: w.id == props.selectedId})} >
							<td>{w.id}</td>
							<td>{w.name}</td>
							<td>{w.nsOffset}</td>
							<td>{w.ewOffset}</td>
							<td>{w.motherbore}</td>
						</tr>)}
				</tbody>
			</Table>

		
		</Panel>)
	}
}


export default  WellsiteWellsGrid;
