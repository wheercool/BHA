import {Link, hashHistory} from 'react-router'
import actionTypes  from './actionTypes'

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