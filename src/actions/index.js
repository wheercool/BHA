import {Link, hashHistory} from 'react-router'
import actionTypes  from './actionTypes'
import wellsiteService from '../services/wellsite'

export function getWellsites(page = 1, filter = '') {
	return dispatch => {
			dispatch({
				type: actionTypes.wellsitesLoading

			});

		wellsiteService.get(page, filter)
			.then(d => {
				// debugger;
				dispatch({
					type: actionTypes.wellsitesLoaded,
					payload: {
						page: page,
						filter: filter,
						totalPages: d.totalPages,
						data: d.data
					}
				})
			});
	}
}
export function editWellsite(wellsite, redirectUrl) {
	return dispatch => {
		dispatch({
			type: actionTypes.editWellsite,
			payload: wellsite 
		});
		hashHistory.push(redirectUrl);
	}
}

export function removeWellsite(id) {
	return {
		type: actionTypes.removeWellsite,
		payload: {
			id: id
		}		
	}
}



export function removeWell(id) {
	return {
		type: actionTypes.removeWell,
		payload: {
			id: id
		}		
	}
}

export function addWellsite(wellsite, redirectUrl) {
	return dispatch => {
		dispatch({
			type: actionTypes.addWellsite,
			payload: wellsite 
		});
		hashHistory.push(redirectUrl);
	}
}