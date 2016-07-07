import React from 'react'
import {Link, hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {Col, Button, Panel, Glyphicon} from 'react-bootstrap'

import WellsiteEditor from '../WellsiteEditor'
import List from '../List'
import {editWellsite} from 'actions'

let Edit = props => {
		const { params: {wellsiteId}, form,  onEdit, onDelete}= props,
			wellsite = props.wellsites.filter(w => w.id == wellsiteId)[0],
			wellsiteName = wellsite.name;
		const onEditButtonClick = () => {
			let itemValue = {
				id: form.id.value,
				name: form.name.value,
				city: form.city.value,
				address: form.address.value,
				postcode: form.postcode.value
			}
			onEdit(itemValue)
		}

		let buttonToolbar = <div><Button bsStyle="success" onClick={onEditButtonClick}>OK</Button>
				<Link to={"/wellsites/byList/view/" + wellsiteId} className="btn btn-default">Cancel</Link>
				<Link to="/wellsites/byList/" className="btn btn-default pull-right"><Glyphicon glyph="arrow-up" /> Back</Link>

			</div>,

			header = <div><Glyphicon glyph="pencil"/> Edit Wellsite</div>	
		return (<div>	

			<Col sm={6} smOffset={3}>
				<Panel header={header} footer={buttonToolbar}>
					<WellsiteEditor initialValues={wellsite}>						
					</WellsiteEditor>
					<List data={wellsite.wells} title="Wells" onDelete={onDelete}/>
				</Panel>
				
			</Col>
			
		</div>)
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
let mapDispatch = (dispatch) => { 

		return {
			onEdit: (item) => {
				dispatch(editWellsite(item, '/wellsites/byList'))
			},
			onDelete: id => {
				dispatch(removeWell(id))
			}
		}
	};


export default connect(mapProps, mapDispatch)(Edit);