var AuthenticationResource = function () {
	return {
		authenticate: function (data) {
			$.ajax({
				method: 'POST',
				url: '/authenticate',
				data: JSON.stringify(data),
				contentType: 'application/json; charset=UTF-8'
			}).done(function (data) {
				store.set('token', data.data.token);
			}).fail(function () {
				console.log('fail', arguments);
			});
		}
	}
}();