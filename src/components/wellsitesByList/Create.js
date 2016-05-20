import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Col, Button, Panel} from 'react-bootstrap'

import List from '../List'
import WellsiteEditor from '../WellsiteEditor'

 class Create extends Component {

 	render() {
		let props = this.props,
			wellsiteId = props.params.wellsiteId;
		let buttonToolbar = <div><Button bsStyle="success" onClick={props.onCreate.bind(this, this)}>Create</Button>
				<Link to="/wellsites/byList" className="btn btn-default">Close</Link></div>

		return (<div>			
			<Col sm={5}>
				<List data={props.wellsites} baseUrl="wellsites/byList"/>
			</Col>

			<Col sm={7}>
				<Panel header="Add" footer={buttonToolbar}>
					<WellsiteEditor ref="editor" type="add" item={{}} />
				</Panel>
				
			</Col>
			
		</div>)
	}
}
let mapProps = (state) => {
	let wellsites = state.main.wellsites;

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