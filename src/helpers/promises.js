export default {
	delay: function(d, value=null) {
	
		return new Promise(function(resolve, reject) {
			setTimeout(() => resolve(value), d);
		})
	}
}