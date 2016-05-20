import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import mainReducer from './mainReducer'

const App = combineReducers({
	main: mainReducer,
	routing: routerReducer,
	form: formReducer
})

export default App