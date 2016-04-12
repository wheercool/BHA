import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import toPoints3D from './helpers/trajectory'
// import todoApp from './reducers'


var f = Math.sin;
		var count = 20000,
			sx = 100,
			sy = 100,
			data = range(0,  Math.PI / 2, Math.PI/count).map(d => [sx * d, sy * f(d), 20 * f(d)]),
			data2 = range(0,  Math.PI / 2, Math.PI/count).map(d => [sx * d - 100, sy * Math.cos(d), 20 * f(d)]);

				

var incomingData = [
	[0,0,0],
	[293,0,0],
	[325,1.53,260.8],
	[410,8.9,196.75],
	[523,11.7,203.59],
	[615,12.98,191.59],
	[715,20.87,205.66],
	[815,26.64,201.98],
	[915,46.94,204.87],
	[1015,53.78,204.87],
	[1115,62.85,210.21],
	[1216,72.71,208.86],
	[1310,74.07,199.39],
	[1430,83.74,197.34],
	[1451,86.83,193.21],
	[1553,86.47,199.43],
	[1684,86.7,208.65],
	[1784,90.4,208.65],
	[1884,88.2,208.65],
	[1974,92.6,209.55],
	[2084.5,96.32,208.44],
	[2504,98.68,207.55] ];


var realData = toPoints3D(incomingData).map(x => x.map(d => d/10))
const defaultState = {	
	fullScreenModeProjectionIndex: -1,
	wellbores: [{
		name: 'Wellbore 1',
		isSelected: true,
		trajectory: realData,
		color: '#F17013'
	}, {
		name: 'Wellbore 3',
		color: '#CFF2E3',
		isSelected: true,
		trajectory: data2
	}]
};

let store = createStore((state, action) => {
	switch (action.type) {
		case 'TOGGLE_WELLBORE':
			return {
				fullScreenModeProjectionIndex: state.fullScreenModeProjectionIndex,
				wellbores: state.wellbores.map(x => {
					return (x.name == action.payload.name)
						? {name: x.name, trajectory: x.trajectory, isSelected: !x.isSelected, color: x.color}
						: x})

			};
		case 'WELLBORE_COLOR_CHANGED':
			return {
				fullScreenModeProjectionIndex: state.fullScreenModeProjectionIndex,
				wellbores: state.wellbores.map(x => {
					return (x.name == action.payload.name)
						? {name: x.name, trajectory: x.trajectory, isSelected: x.isSelected, color: action.payload.color}
						: x})
			}
		case 'PROJECTION_MODE_CHANGED':
			return {
				fullScreenModeProjectionIndex: state.fullScreenModeProjectionIndex >= 0? -1: action.payload.index,
				wellbores: state.wellbores
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
