import axios from './axios';

export const userService = {
	login,
	logout,
	signup,
	getLoggedinUser,
	saveLocalUser,
	getUsers,
	getById,
	remove,
	update,
};

const STORAGE_KEY_LOGGEDIN_USER: string = 'loggedinUser';

async function getUsers() {
	return axios.get(`users`);
}

async function getById(userId: string) {
	try {
		const user = await axios.get(`user/${userId}`);
		return user;
	} catch (error) {
		return error.response;
	}
}
function remove(userId: string) {
	try {
		return axios.delete(`user/${userId}`);
	} catch (error) {
		return error.response;
	}
}

async function update(user: any) {
	try {
		user = await axios.put(`user/${user._id}`, user);
		return user;
	} catch (error) {
		return error.response;
	}
}

async function login(userCred: any) {
	try {
		const user = await axios.post('login', userCred);
		return user;
	} catch (error) {
		return error.response;
	}
}
async function signup(userCred: any) {
	try {
	} catch (error) {
		return error.response;
	}

	const user = await axios.post('signup', userCred);
	return saveLocalUser(user);
}

async function logout() {
	try {
        const user = getLoggedinUser();
        sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
        return await axios.post('logout', user);
	} catch (error) {
		return error.response;
	}

}

function saveLocalUser(user: any) {
	sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
	return user;
}

function getLoggedinUser() {
	return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
}
