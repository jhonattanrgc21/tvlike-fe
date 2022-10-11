export interface AuthResponse {
	ok?: boolean;
	uuid?: number;
	name?: string;
	token?: string;
	message?: string;
}

export interface AuthLogin {
	username: string;
	password: string;
}

export interface Register {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
}

export type User = Pick<AuthResponse, 'uuid' | 'name' | 'token'>;
