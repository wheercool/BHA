import promises from '../helpers/promises'
const pageSize = 5;

const wellsites = [{
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
	}];

for (let i = 0; i < 500; i++) {
	wellsites.push({
		id: wellsites.length + 1,
		name: 'Wellsite ' + i,
		city: 'test ' + i,
		address: 'Heine 12-' + i,
		postcode: '123H3'	
	});
}

export default {
	get(page, filter) {
		const start = (page - 1) * pageSize;

		return promises.delay(1000, {
			totalPages: Math.round(wellsites.length / pageSize),
			data: wellsites.slice(start, start + pageSize)
		})
	}
}