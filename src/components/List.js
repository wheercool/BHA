import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Col, Glyphicon, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import Confirm from './Confirm'

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {show: false}
	}
	render() {
		let props = this.props;

		return (<div>
				<ListGroup>
					{props.data.map((w, idx) => <ListGroupItem key={idx} className={props.selectedId == w.id? "active" : ""}>
							{props.selectedId == w.id? w.name : <Link to={props.baseUrl + '/view/' + w.id}>{w.name} </Link>}
							<Button className="pull-right close" onClick={this.onDelete.bind(this, true)}><span className="text-danger" aria-hidden="true">&times;</span></Button>
							</ListGroupItem>)}
				</ListGroup>
				<Link to={props.baseUrl + "/add/"} className="btn btn-default">Add</Link>	
				<Confirm show={this.state.show} onNo={this.onDelete.bind(this, false)} onYes={this.props.onDelete}/>		
		</div>)
	}
	onDelete(show) {
		this.setState({show: show})
	}
}

export default List