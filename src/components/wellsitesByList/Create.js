import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Col, Button, Panel, Glyphicon} from 'react-bootstrap'

import WellsiteEditor from '../WellsiteEditor'

 class Create extends Component {

 	render() {
		let props = this.props,
			wellsiteId = props.params.wellsiteId;
		let buttonToolbar = <div><Button bsStyle="success" onClick={props.onCreate.bind(this, this)}>Create</Button>
				<Link to="/wellsites/byList" className="btn btn-default">Close</Link></div>,

			addHeader = <div><Glyphicon glyph="plus"/> Add Wellsite</div>;

		return (<div>			

			<Col sm={6} smOffset={3}>
				<Panel header={addHeader} footer={buttonToolbar}>
					<WellsiteEditor type="add" item={{}} />
				</Panel>
				
			</Col>
			
		</div>)
	}
}
let mapProps = (state) => {
	var wellsites = state.main.wellsites.map(w => ({
		id: w.id,
		name: w.name,
		city: w.city,
		address: w.address,
		postcode: w.postcode,
		wells: state.main.wells.filter(well => well.wellsiteId == w.id)
	}));
	return {
		wellsites: wellsites
	}
}

let mapDispatch = (dispath) => { return {
	onCreate: (self) => {
		debugger;
		dispath({
			type: 'CREATE',
			unit: 'wellsites'
		})
	}
}};


export default connect(mapProps, mapDispatch)(Create);