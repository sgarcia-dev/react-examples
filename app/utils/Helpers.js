var Axios = require('axios');

function getRepos(username) {
	return Axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username) {
	return Axios.get('https://api.github.com/users/' + username);
}

var helpers = {
	getGithubInfo: function (username) {
		return Axios.all([getRepos(username), getUserInfo(username)])
			.then(function (dataArray) {
				return {
					repos: dataArray[0].data,
					bio: dataArray[1].data
				}
			});
	}
};

module.exports = helpers;