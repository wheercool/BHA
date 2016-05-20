import {connect} from 'react-redux'

let defaultMapProps = (state, props) => {
		
		let wellsites = state.main.wellsites,
			wellsiteId = props.params.wellsiteId,
			wells = wellsiteId? state.main.wells.filter(w => w.wellsiteId == wellsiteId): [];
		return {
			wellsites: wellsites,
			wells: wells
		}
	},
	id = x => x,
	mapDispatch = (dispath) => { return {}};


let result = {
	defaultMapProps: defaultMapProps,
	id: id,
	defaultConnect: connect(defaultMapProps, mapDispatch)
};
export default result