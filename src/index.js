import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import todoApp from './reducers'


var f = Math.sin;
		var count = 20000,
			sx = 100,
			sy = 100,
			data = range(0,  Math.PI / 2, Math.PI/count).map(d => [sx * d, sy * f(d), 20 * f(d)]),
			data2 = range(0,  Math.PI / 2, Math.PI/count).map(d => [sx * d - 100, sy * Math.cos(d), 20 * f(d)]);

				


const defaultState = {
	wellbores: [{
		name: 'Wellbore 1',
		isSelected: true,
		trajectory: data
	}, {
		name: 'Wellbore 3',
		isSelected: true,
		trajectory: data2
	}]
};

let store = createStore((state, action) => {
	switch (action.type) {
		case 'TOGGLE_WELLBORE':
			return {
				wellbores: state.wellbores.map(x => {
					return (x.name == action.payload.name)
						? {name: x.name, trajectory: x.trajectory, isSelected: !x.isSelected}
						: x})

			};
		default:
			return defaultState;
	}
})

store.subscribe(() => console.log(store.getState()));

function range(a, b, step) {
	var res = [];		
	step = step || 1;
	while (a < b) {
		res.push(a);
		a += step;
	}
	return res;
}



// Render the main component into the dom
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
