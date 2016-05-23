import React, {Component} from 'react'
import {PanelGroup, Panel, ListGroupItem, Col, Glyphicon, Button, FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap'
import {Link} from 'react-router'
import Confirm from './Confirm'

require('styles/List.css')

function match(filter) {
	return (v) => filter == '' || v.name.startsWith(filter)
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

					
						{filteredItems.map((w, idx) => <Panel key={idx} 
											header={this.header(w)}
											className={selectedId == w.id? "active" : ""}>
								
											<div><Link to={this.baseUrl + '/edit/' + w.id}>
													<Glyphicon glyph="plus" className="text-success"/>
												</Link> {subTitle}({w.wells.length}):</div>
											{w.wells.map((well, wellIdx) => <Col key={wellIdx} sm={2}>{this.link(well)}</Col>)}
								
								</Panel>)}
					
				</PanelGroup>
				<Confirm show={this.state.show} onNo={this.onDelete.bind(this, false)} onYes={this.onDelete}/>		
		</div>)
	}
	removeButton() {
		return <div className="pull-right close" onClick={this.onDelete.bind(this, true)}><span className="text-danger" aria-hidden="true">&times;</span></div>
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
	onFilterChanged(event) {
		this.setState({
			filter: event.target.value
		})
	}
}

export default List