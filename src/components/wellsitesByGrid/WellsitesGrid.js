import React, {Component} from 'react'
import {Table, ButtonGroup, Button, Panel, FormGroup, InputGroup, FormControl, Glyphicon, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import classNames from 'classNames'
import { hashHistory } from 'react-router'
import Confirm from '../Confirm'
import DeleteButton from '../DeleteButton'

let onClick = (id, baseUrl, deselect) => {
	hashHistory.push(deselect? baseUrl: baseUrl + '/view/' + id)
}
class WellsitesGrid extends Component {
	constructor(props) {
		super(props)
		this.state = {show: false}
	}
	render() {
		let props = this.props,
			className = (w) => classNames({active: w.id == props.selectedId});

		let buttonToolbar = <ButtonGroup>
				
				<Link 	to={props.baseUrl + '/edit/' + props.selectedId} 
						className="btn btn-primary" 						
						disabled={!props.selectedId}>Edit</Link>
				<DeleteButton disabled={!props.selectedId} onClick={this.onDelete.bind(this, true)} />
			</ButtonGroup>;
		let header = <div>

				<FormGroup >

				 	<InputGroup >
				 		<InputGroup.Addon className="search-input-group"><Link to={props.baseUrl + "/add/"} className="btn-success btn-lg"><Glyphicon glyph="plus"/></Link></InputGroup.Addon>
				 		<InputGroup.Addon className="search-input-group"><h5>Wellsites</h5></InputGroup.Addon>
				    	<Col sm={3} className="pull-right"><FormControl type="text" placeholder="Search..." /></Col>
				    </InputGroup>
				</FormGroup>
		</div>
		return (<Panel header={header} footer={buttonToolbar} bsStyle="default">
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
			<Confirm show={this.state.show} onYes={this.props.onDelete} onNo={this.onDelete.bind(this, false)}/>
		</Panel>)


	}
	onDelete(show) {
		this.setState({
			show: show
		});
	}
}	


export default  WellsitesGrid;
