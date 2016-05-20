import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import mainReducer from './mainReducer'

const App = combineReducers({
	main: mainReducer,
	routing: routerReducer
})

export default App