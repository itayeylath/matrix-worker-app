const INITIAL_STATE = {
	loggedInUser: null,
	tokenData: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
	const { loggedInUser } = state;
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				loggedInUser: action.loggedInUser || loggedInUser,
			};

		case 'LOGOUT':
			return {
				...state,
				loggedInUser: null,
			};

		case 'UPDATE_USER':
			return {
				...state,
				loggedInUser: { ...action.loggedInUser },
			};

		default:
			return state;
	}
};
