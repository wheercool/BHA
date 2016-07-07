import React, {Component} from 'react'
import {Table, ButtonGroup, Button, Pagination, Panel, FormGroup, InputGroup, FormControl, Glyphicon, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import classNames from 'classNames'
import { hashHistory } from 'react-router'
import Confirm from '../Confirm'
import DeleteButton from '../DeleteButton'

let onClick = (id, baseUrl, selectUrl, deselect, location) => {
	debugger;
	hashHistory.push(deselect? baseUrl: selectUrl + '/' + id + location.search)
}
class WellsitesGrid extends Component {
	constructor(props) {
		super(props)
		this.state = {show: false, pageY: 0 }
	}
	render() {
		const begin = this.state.pageY / 40 | 0;
		const {loading, baseUrl, selectedId, data, onDelete, page, filter, totalPages = 0, location} = this.props
		const selectUrl = this.props.selectUrl || baseUrl + '/view'

		const className = (w) => classNames({active: w.id == selectedId});
		let buttonToolbar = <div>
				<ButtonGroup>
					
					<Link 	to={baseUrl + '/edit/' + selectedId} 
							className="btn btn-primary" 						
							disabled={!selectedId}>Edit</Link>
					<DeleteButton disabled={!selectedId} onClick={this.onDelete.bind(this, true)} />
				</ButtonGroup>
				<Pagination className="btn-group pull-right" items={totalPages}
							activePage={page}
							prev
							next
							first
							last
							maxButtons={5}
							onSelect={this.onPageChanged.bind(this, location)}/>
			</div>;
		let header = <div>

				<FormGroup >

				 	<InputGroup >
				 		<InputGroup.Addon className="search-input-group"><Link to={baseUrl + "/add/"} className="btn-success btn-lg"><Glyphicon glyph="plus"/></Link></InputGroup.Addon>
				 		<InputGroup.Addon className="search-input-group"><h5>Wellsites</h5></InputGroup.Addon>
				    	<Col sm={3} className="pull-right"><FormControl type="text" placeholder="Search..." /></Col>
				    </InputGroup>
				</FormGroup>
		</div>
		return (<Panel  header={header} footer={buttonToolbar} bsStyle="default">
			
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

				{ /*
					<tbody key="wellsite-grid">
									{data.slice(begin, begin + 10).map((w, idx) =><tr key={idx} className={className(w)} onClick={onClick.bind(null, w.id, baseUrl, selectUrl, selectedId == w.id)} >
											<td><input type="checkbox" checked={w.id == selectedId} readOnly/></td>
											<td>{w.id}</td>
											<td>{w.name}</td>
											<td>{w.city}</td>
											<td>{w.address}</td>
											<td>{w.postcode}</td>
										</tr>)}
				
									<tr ref="extender" className="extender" style={{height: 40 * data.length}}></tr>
				
								</tbody>
				*/}

				<tbody key="wellsite-grid">
					{data.map((w, idx) =><tr key={idx} className={className(w)} onClick={onClick.bind(null, w.id, baseUrl, selectUrl, selectedId == w.id, location)} >
							<td><input type="checkbox" checked={w.id == selectedId} readOnly/></td>
							<td>{w.id}</td>
							<td>{w.name}</td>
							<td>{w.city}</td>
							<td>{w.address}</td>
							<td>{w.postcode}</td>
						</tr>)}
					
				</tbody>
			</Table>
			

			<Confirm show={this.state.show} onYes={onDelete} onNo={this.onDelete.bind(this, false)}/>
		</Panel>)


	}
	onDelete(show) {
		this.setState({
			show: show
		});
	}
	componentDidMount() {
		window.addEventListener('scroll', this.onScoll.bind(this), true);
		// this.refs.body.addEventListener('scroll', this.onScoll);
	}
	onScoll(event) {
		// debugger;
		let scrollTop = event.srcElement.scrollTop;
		// this.setState({
		// 	pageY: scrollTop
		// });

		// if (event.srcElement == this.refs.body) {
		// 	debugger;

		// // let scrollTop = event.srcElement.body.scrollTop
		// }
		// console.log(scrollTop)
	}
	onPageChanged(location, page) {
		hashHistory.push(location.pathname + '?page=' + page)
	}
}	


export default  WellsitesGrid;
