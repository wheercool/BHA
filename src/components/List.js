import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Col, Glyphicon, Button, FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap'
import {Link} from 'react-router'
import classNames from 'classNames'

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
		let {baseUrl, title, data, disabled, selectedId, onDelete} = this.props,
			filteredItems = data.filter(match(this.state.filter))
		let itemClassName = classNames('pull-right close', {
			hidden: disabled
		});
		return (<div>
				 <FormGroup >
				 	<div>
			 			<h5>{title}<small>({filteredItems.length} of {data.length})</small></h5>
			 		</div>
			 		<div className="clearfix"/>
				 	{
				 		disabled? <FormControl 	type="text" 
				    					placeholder="Search..."
				    					value={this.state.filter}
				    					onChange={this.onFilterChanged.bind(this)} />
				    			: 
		    			(<InputGroup >
						 		<InputGroup.Addon className="search-input-group">
						 			<Link to={baseUrl + "/add/"} className="btn-success btn-lg">
						 				<Glyphicon glyph="plus"/></Link>
						 		</InputGroup.Addon>
				    			<FormControl 	type="text" 
						    					placeholder="Search..."
						    					value={this.state.filter}
						    					onChange={this.onFilterChanged.bind(this)}  />
    					
				    
							
				 		</InputGroup>)
				 	}
				 	
				</FormGroup>
				<ListGroup>
					{filteredItems.map((w, idx) => <ListGroupItem key={idx} className={selectedId == w.id? "active" : ""}>
							<div disabled={disabled} className={itemClassName} onClick={this.onDelete.bind(this, w.id)}><span className="text-danger" aria-hidden="true">&times;</span></div>
							{selectedId == w.id? <span>{w.name}</span> : <span><Link to={baseUrl + '/view/' + w.id}>{w.name}</Link></span>}
							<div className="clearfix"/>
							</ListGroupItem>)}
				</ListGroup>
		</div>)
	}
	onDelete(id) {
		this.props.onDelete(id)
	}
	onFilterChanged(event) {
		this.setState({
			filter: event.target.value
		})
	}
}

export default List