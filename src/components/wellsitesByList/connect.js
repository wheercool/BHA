import {connect} from 'react-redux'

let defaultMapProps = (state) => {
		let wellsites = state.main.wellsites;

		return {
			wellsites: wellsites
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