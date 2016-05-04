import axios from 'axios';

function getRepos(username) {
	return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
	return axios.get(`https://api.github.com/users/${username}`);
}

const helpers = {
	getGithubInfo(username) {
		return axios.all([getRepos(username), getUserInfo(username)])
			.then((dataArray) => ({ repos: dataArray[0].data, bio: dataArray[1].data }));
	}
};

export default helpers;