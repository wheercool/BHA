require('styles/trajectory.css')
import React, {Component} from 'react'
import {Table, Glyphicon, ButtonGroup, Button, FormControl} from 'react-bootstrap'

class Trajectory extends Component {

	constructor(props) {
		super(props)
		this.state = {
			editId: -1
		}
	}
	render() {
		const {points} = this.props;

		return <Table bordered>
			<thead>
				<tr>
					<th className="actions-column">Actions</th>
					<th>Depth</th>
					<th>Inclination</th>
					<th>Azimuth</th>
					<th className="move-column">Move</th>
				</tr>
			</thead>
			<tbody>
				{points.map((p, idx) => (this.state.editId != idx? (<tr key={idx} onDoubleClick={this.onEdit.bind(this, idx)}>
					<td className="actions-column">
						<a hef="#" className="text-success"><Glyphicon  glyph="plus" /></a>&nbsp;
						<a href="#" onClick={this.onEdit.bind(this, idx)} className="text-edit"><Glyphicon glyph="pencil"/></a>&nbsp;
						<a href="#" className="text-danger"><Glyphicon  glyph="trash"/></a>
					</td>
					<td>{p[0]}</td>
					<td>{p[1]}</td>
					<td>{p[2]}</td>
					<td className="move-column">
						<a href="#"><Glyphicon glyph="arrow-up"/></a>
						<a href="#"><Glyphicon glyph="arrow-down"/></a>
					</td>
					
				</tr>): 
				(<tr key={idx}>
					<td className="actions-column editable">
						<a href="#" className="text-success" >
							<Glyphicon glyph="ok-circle" />
						</a>&nbsp;
						<a href="#" onClick={this.onEdit.bind(this, -1)} className="text-danger">
							<Glyphicon  glyph="remove-circle"/></a>
					</td>
					<td><FormControl type="text" defaultValue={p[0]}/></td>
					<td><FormControl type="text" defaultValue={p[1]}/></td>
					<td><FormControl type="text" defaultValue={p[2]}/></td>
					<td className="move-column editable">
						<a href="#" className="text-success" >
							<Glyphicon glyph="ok-circle" />
						</a>&nbsp;
						<a href="#" onClick={this.onEdit.bind(this, -1)} className="text-danger">
							<Glyphicon  glyph="remove-circle"/></a>
					</td>
					
				</tr>) ))
				}
			</tbody>
		</Table>;
	}
	onEdit(id, e) {
		debugger;
		e.preventDefault();
		this.setState({
			editId: id
		})
	}
	onMove(id, e) {
		
	}
}

export default Trajectory