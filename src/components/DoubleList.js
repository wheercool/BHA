import React, {Component} from 'react'
import {PanelGroup, Panel, ListGroupItem, Col, Glyphicon, Button, FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap'
import {Link} from 'react-router'
import Confirm from './Confirm'

require('styles/List.css')

function match(filter) {


	return (v) => filter == '' || v.name.startsWith(filter)
}

class ListItem extends Component {
	constructor(props) {
		super(props)
	}
	shouldComponentUpdate(nextProps) {
		// return true;
		return nextProps == this.props;	
	}
	render() {
		console.log('==List Item==')
		const {baseUrl, subTitle, selectedId, onCofirm, w} = this.props;
		const header = (w) => {
			return <div>
				{removeButton(w.id)}
				{link(w)}
				<div className="clearfix" />
			</div>
		},
		link = (w) => {
			return selectedId == w.id? <span>{w.name}</span> : <span><Link to={baseUrl + '/view/' + w.id}>{w.name}</Link></span>
		},
		removeButton = (id) => {
			return <div className="pull-right close" onClick={onCofirm}><span className="text-danger" aria-hidden="true">&times;</span></div>
		};

		return <Panel 
				header={header(w)}
				className={selectedId == w.id? "active" : ""}>

				<div><Link to={baseUrl + '/edit/' + w.id}>
						<Glyphicon glyph="plus" className="text-success"/>
					</Link> {subTitle}({w.wells.length}):</div>
				{w.wells.map((well, wellIdx) => <Col key={wellIdx} sm={2}>{link(well)}</Col>)}
						
		</Panel>;
	}
}

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {show: false, filter: ''}		
	}
	render() {
		let {title, subTitle, data, baseUrl, selectedId, onDelete} = this.props,
			filteredItems = data.filter(match(this.state.filter))

		return (<div>
				 <FormGroup >
			 		<InputGroup.Addon className="search-input-group pull-left">
			 			<h5>{title}<small>({filteredItems.length} of {data.length})</small></h5>
			 		</InputGroup.Addon>
				 	<div className="clearfix"/>
				 	<InputGroup >
				 		<InputGroup.Addon className="search-input-group"><Link to={baseUrl + "/add/"} className="btn-success btn-lg"><Glyphicon glyph="plus"/></Link></InputGroup.Addon>
				    	<FormControl 	type="text" 
				    					placeholder="Search..."
				    					value={this.state.filter}
				    					onChange={this.onFilterChanged.bind(this)}
				    					 />
				    </InputGroup>
				</FormGroup>
				<PanelGroup>
						{
							filteredItems.map((w, idx) => <ListItem  
																	key={idx}
																	w={w}
																	idx={idx}
																	selectedId={selectedId}
																	baseUrl={baseUrl}
																	subTitle={subTitle}
																	onCofirm={this.onCofirm.bind(this, true, w.id)}/>)
						}
					
						{/* filteredItems.map((w, idx) => <Panel key={idx} 
											header={this.header(w)}
											className={selectedId == w.id? "active" : ""}>
								
											<div><Link to={this.baseUrl + '/edit/' + w.id}>
													<Glyphicon glyph="plus" className="text-success"/>
												</Link> {subTitle}({w.wells.length}):</div>
											{w.wells.map((well, wellIdx) => <Col key={wellIdx} sm={2}>{this.link(well)}</Col>)}
								
								</Panel>)
						*/}
					
				</PanelGroup>
				<Confirm show={this.state.show} onNo={this.onCofirm.bind(this, false)} onYes={this.onDelete.bind(this)}/>		
		</div>)
	}
	removeButton(id) {
		return <div className="pull-right close" onClick={this.onCofirm.bind(this, true, id)}><span className="text-danger" aria-hidden="true">&times;</span></div>
	}
	header(w) {
		return <div>
			{this.removeButton(w.id)}
			{this.link(w)}
			<div className="clearfix" />
		</div>
	}
	link(w) {
		return this.props.selectedId == w.id? <span>{w.name}</span> : <span><Link to={this.props.baseUrl + '/view/' + w.id}>{w.name}</Link></span>
	}
	onCofirm(show, id) {
		this.setState({
			show: show,
			deletingItemId: id
		})
	}
	onDelete() {
		this.props.onDelete(this.state.deletingItemId)
		this.setState({
			show: false,
			deletingItemId: null
		})
	}
	onFilterChanged(event) {
		this.setState({
			filter: event.target.value
		})
	}
}

export default List