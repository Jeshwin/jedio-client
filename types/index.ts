export interface User {
	userId: number;
	username: string;
	email: string;
	password: string;
	isAdmin: boolean;
}

export interface State {
	status: {
		loggedIn: boolean;
	};
	user: User | null;
}
