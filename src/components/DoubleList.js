import React, {Component} from 'react'
import {PanelGroup, Panel, ListGroupItem, Col, Glyphicon, Button, FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap'
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
				<PanelGroup>

					
						{props.data.map((w, idx) => <Panel key={idx} header={this.header(w)} className={props.selectedId == w.id? "active" : ""}>
								
								<div><Link to={this.baseUrl + '/edit/' + w.id}><Glyphicon glyph="plus" className="text-success"/></Link> Wells:</div>
								{w.wells.map((well, wellIdx) => <Col key={wellIdx} sm={1}>{this.link(well)}</Col>)}
								
								</Panel>)}
					
				</PanelGroup>
				<Confirm show={this.state.show} onNo={this.onDelete.bind(this, false)} onYes={this.props.onDelete}/>		
		</div>)
	}
	removeButton() {
		return <Button className="pull-right close" onClick={this.onDelete.bind(this, true)}><span className="text-danger" aria-hidden="true">&times;</span></Button>
	}
	header(w) {
		return <div>
			{this.removeButton()}
			{this.link(w)}
			<div className="clearfix" />
		</div>
	}
	link(w) {
		return this.props.selectedId == w.id? <span>{w.name}</span> : <span><Link to={this.props.baseUrl + '/view/' + w.id}>{w.name}</Link></span>
	}
	onDelete(show) {
		this.setState({show: show})
	}
}

export default List