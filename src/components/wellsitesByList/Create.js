import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Col, Button, Panel, Glyphicon} from 'react-bootstrap'

import WellsiteEditor from '../WellsiteEditor'
import {addWellsite} from 'actions'

 class Create extends Component {

 	render() {
		const { onAdd, form} = this.props


		const onAddButtonClick = () => {
			let itemValue = {
				name: form.name.value,
				city: form.city.value,
				address: form.address.value,
				postcode: form.postcode.value
			}
			onAdd(itemValue)
		}

		let buttonToolbar = <div><Button bsStyle="success" onClick={onAddButtonClick}>Create</Button>
				<Link to="/wellsites/byList" className="btn btn-default">Close</Link></div>,

			addHeader = <div><Glyphicon glyph="plus"/> Add Wellsite</div>;

		return (<div>			

			<Col sm={6} smOffset={3}>
				<Panel header={addHeader} footer={buttonToolbar}>
					<WellsiteEditor type="add" initialValues={{}} />
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
		wellsites: wellsites,
		form: state.form.wellsite
	}
}

let mapDispatch = (dispath) => { return {
	onAdd: (wellsite) => {
		dispath(addWellsite(wellsite, '/wellsites/byList'))
	}
}};


export default connect(mapProps, mapDispatch)(Create);