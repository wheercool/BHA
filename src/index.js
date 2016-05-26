import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,  combineReducers, applyMiddleware} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory, hashHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'

import App from './reducers'

//Entry Point
import Main from './components/Main';

//Projects
import Projects from './components/Projects'

//Wellsites
import WellsitesHeader from './components/WellsitesHeader'

//By List
import WellsitesByListIndex from './components/wellsitesByList/Index'
import ViewWellsite from './components/wellsitesByList/Detail'
import AddWellsite from './components/wellsitesByList/Create'
import EditWellsite from './components/wellsitesByList/Edit'
import WellsitesByListDelete from './components/wellsitesByList/Delete'

//By Grid
import WellsitesByGridIndex from './components/wellsitesByGrid/Index'
import WellsitesByGridDetail from './components/wellsitesByGrid/Detail'
import WellsitesByGridEdit from './components/wellsitesByGrid/Edit'
import WellsitesByGridCreate from './components/wellsitesByGrid/Create'


//By 3D
import BHA from './components/wellsitesBy3D/BHA'
import WellsitesBy3DIndex from './components/wellsitesBy3D/Index'
import WellsitesBy3DDetail from './components/wellsitesBy3D/Detail'

const store = createStore(App, applyMiddleware(thunkMiddleware))

store.subscribe(() => console.log('STORE: ' + JSON.stringify(store.getState())));

const history = syncHistoryWithStore(hashHistory, store)

let Empty = (props) => {
	
	return (<div>Empty</div>)
}


// Render the main component into the dom
ReactDOM.render((<Provider store={store}>
					<Router history={history}>
						<Route path="/" component={Main}>
							<Route path="wellsites" component={WellsitesHeader}>	
								<IndexRedirect to="/wellsites/byList" />													
								<Route path="byList">
									<IndexRoute component={WellsitesByListIndex} />								
									<Route path="view/:wellsiteId" component={ViewWellsite} />								
									<Route path="edit/:wellsiteId" component={EditWellsite} />								
									<Route path="remove/:wellsiteId" component={WellsitesByListDelete} />								
									<Route path="add" component={AddWellsite} />	
								</Route>
								
								<Route path="byGrid">
									<IndexRoute component={WellsitesByGridIndex}/>
									<Route path="view/:wellsiteId" component={WellsitesByGridDetail} />	
									<Route path="edit/:wellsiteId" component={WellsitesByGridEdit} />	
									<Route path="add/" component={WellsitesByGridCreate} />	
								</Route>

								<Route path="by3D">
									<IndexRoute component={WellsitesBy3DIndex}/>
									<Route path="view/:wellsiteId" component={WellsitesBy3DDetail}/>
								</Route>
							</Route>
															
							
							<Route path="projects" component={Projects}/>
							
							<Route path="wells" component={Empty} />
						</Route>
					</Router>
				</Provider>), document.getElementById('app'));
