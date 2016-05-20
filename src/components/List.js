import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Col, Glyphicon, Button, FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap'
import {Link} from 'react-router'
import Confirm from './Confirm'

require('styles/List.css')
class List extends Component {
	constructor(props) {
		super(props)
		this.state = {show: false}
	}
	render() {
		let props = this.props;

		return (<div>
				 <FormGroup >
				 	<InputGroup >
				 		<InputGroup.Addon className="search-input-group"><Link to={props.baseUrl + "/add/"} className="btn-success btn-lg"><Glyphicon glyph="plus"/></Link></InputGroup.Addon>
				    	<FormControl type="text" placeholder="Search..." />
				    </InputGroup>
				</FormGroup>
				<ListGroup>
					{props.data.map((w, idx) => <ListGroupItem key={idx} className={props.selectedId == w.id? "active" : ""}>
							<Button className="pull-right close" onClick={this.onDelete.bind(this, true)}><span className="text-danger" aria-hidden="true">&times;</span></Button>
							{props.selectedId == w.id? <span>{w.name}</span> : <span><Link to={props.baseUrl + '/view/' + w.id}>{w.name}</Link></span>}
							<div className="clearfix"/>
							</ListGroupItem>)}
				</ListGroup>
				<Confirm show={this.state.show} onNo={this.onDelete.bind(this, false)} onYes={this.props.onDelete}/>		
		</div>)
	}
	onDelete(show) {
		this.setState({show: show})
	}
}

export default List