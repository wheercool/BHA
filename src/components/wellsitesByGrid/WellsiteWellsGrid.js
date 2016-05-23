import React, {Component} from 'react'
import {Table, ButtonGroup, Button, Panel, Col, FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'
import classNames from 'classNames'
import { hashHistory } from 'react-router'

let onClick = (id, baseUrl) => {
	hashHistory.push(baseUrl + '/view/' + id)
}
class WellsiteWellsGrid extends Component {
	render() {
		let props = this.props,
			{title} = props;
		let buttonToolbar = <ButtonGroup>
				
				<Button bsStyle="primary" disabled={!props.selectedId}>Edit</Button>
				<Button bsStyle="danger" disabled={!props.selectedId}>Delete</Button>
			</ButtonGroup>;
		let header = <FormGroup >

				 	<InputGroup >
				 		<InputGroup.Addon className="search-input-group"><Link to={props.baseUrl + "/add/"} className="btn-success btn-lg"><Glyphicon glyph="plus"/></Link></InputGroup.Addon>
				 		<InputGroup.Addon className="search-input-group"><h5>{title}</h5></InputGroup.Addon>
				    	<Col sm={3} className="pull-right"><FormControl type="text" placeholder="Search..." /></Col>
				    </InputGroup>
				</FormGroup>;

		return (<Panel header={header} footer={buttonToolbar} bsStyle="default">
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
