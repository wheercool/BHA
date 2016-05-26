import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import mainReducer from './mainReducer'

const App = combineReducers({
	main: mainReducer,
	routing: routerReducer,
	form: formReducer
})

let topLevelReducer = (state, action) => {	
	console.log('Top Level reducer')
	// switch(action.type) {
	// 	'FLUSH_FORM':
	// 		return {
	// 			main:
	// 			routing: state.routing,
	// 			form: {
					
	// 			}
	// 		}
	// }
	return App(state, action)
}

export default topLevelReducer