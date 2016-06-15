import React, {Component} from 'react'
import {Table, ButtonGroup, Button, Panel, Col, FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router'
import classNames from 'classNames'
import { hashHistory } from 'react-router'
import DeleteButton from '../DeleteButton'

let onClick = (id, baseUrl) => {
	hashHistory.push(baseUrl + '/' + id)
}


class WellsiteWellsGrid extends Component {
	render() {
		let props = this.props,
			{title, baseUrl, selectedId} = props;
			debugger;
		let buttonToolbar = <ButtonGroup>
				
				<Button bsStyle="primary" disabled={!selectedId}>Edit</Button>
				<DeleteButton disabled={!selectedId} />
			</ButtonGroup>;
		let header = <FormGroup >

				 	<InputGroup >
				 		<InputGroup.Addon className="search-input-group"><Link to={baseUrl + "/add/"} className="btn-success btn-lg"><Glyphicon glyph="plus"/></Link></InputGroup.Addon>
				 		<InputGroup.Addon className="search-input-group"><h5>{title}</h5></InputGroup.Addon>
				    	<Col sm={3} className="pull-right"><FormControl type="text" placeholder="Search..." /></Col>
				    </InputGroup>
				</FormGroup>;

		return (<Panel header={header} footer={buttonToolbar} bsStyle="default">
			<Table hover >
				<thead>
					<tr>
						<th></th>
						<th>Id</th>
						<th>Name</th>
						<th>North/South Offset</th>
						<th>East/West Offset</th>
						<th>Mothebore</th>
					</tr>
				</thead>

				<tbody>
					{props.data.map((w, idx) =><tr key={idx} 
							className={classNames({active: w.id == selectedId})} 
							onClick={onClick.bind(null, w.id, baseUrl)}>
							<td><input type="checkbox" checked={w.id == selectedId} readOnly/></td>
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
