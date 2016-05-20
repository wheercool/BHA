import converter  from '../helpers/trajectory';

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

var expectedResult = [
[0, 0, 0],
[0, 0, -293],
[-0.421735423448406, -0.0683062336765275, -324.99619704803],
[-3.44218898249088, -6.55742081354781, -409.618941641602],
[-10.5481902413629, -25.4321525177457, -520.791028387459],
[-16.3582372931112, -44.1061429169711, -610.678564340653],
[-26.3476560328887, -71.2172206247779, -706.31014327609],
[-42.4665960028937, -108.095805400272, -797.804141833765],
[-66.4749990025177, -162.604848297532, -877.475253983653],
[-98.84181658595, -232.428896383861, -941.233552619505],
[-138.295746815852, -307.670664616339, -993.731087034413],
[-184.294904668412, -388.936783546162, -1031.88004577537],
[-221.038512243015, -471.046627759872, -1058.80614603086],
[-258.06090969724, -582.678248728347, -1081.873479728],
[-263.571186027644, -602.861382043094, -1083.60020118849],
[-292.169216874349, -700.536065654137, -1089.56642461259],
[-345.383736757867, -819.83052458539, -1097.3866119734],
[-393.305842065792, -907.543671488646, -1099.91662959352],
[-441.245104788987, -995.288222080792, -1101.13825462795],
[-485.002852673145, -1073.90576814598, -1100.51008266366],
[-538.395825614533, -1170.24349273776, -1091.91850249394],
[-733.614125761723, -1537.45436316038, -1037.16555330968],
];



const defaultState = {	
	fullScreenModeProjectionIndex: -1,
	projects: [{
		name: 'Project 1'
	}],
	wellsites: [{
		id: 1,
		name: 'Wellsite1',
		city: 'Berlin',
		address: 'Heine 12',
		postcode: '123H3'	
	}, {
		id: 2,
		name: 'Wellsite2',
		city: 'Moscow',
		address: "Pushkin St - 12",
		postcode: '12'
	}],
	wellbores: [{
		name: 'Wellbore 1',
		isSelected: true,
		trajectory: converter(incomingData).map(x => x.map(d => d/20)),
		color: '#F17013'
	}]
};

let mainReducer = (state, action) => {
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

		case 'WELLBORE_ADDED':
			let randomShift = Math.random() * 20,
				result = converter(action.payload.wellbore.trajectory).map(x => x.map(d => d / 20 + randomShift));
			// var result = Lens('wellbores').set(wellbores.concat(action.payload.wellbore), state);
			return {
				fullScreenModeProjectionIndex: state.fullScreenModeProjectionIndex,
				wellbores: state.wellbores.concat({
					name: action.payload.wellbore.name, 
					trajectory: result,
					isSelected: false,
					color: '#ccffee'
				})
			};
			return state;

		default:
			return defaultState;

	}
};


export default mainReducer