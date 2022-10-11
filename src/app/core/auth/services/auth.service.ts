import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
	AuthLogin,
	AuthResponse,
	Register,
	User,
} from '../interfaces/auth.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl: string = environment.baseUrl;
	private _user!: User;

	constructor(private _httpClient: HttpClient) {}

	/**
	 * @description Almacena los datos del usuario despues de iniciar sesión
	 * @returns User
	 */
	get user() {
		return { ...this._user };
	}

	register(newUser: Register): Observable<any> {
		const url: string = `${this.baseUrl}/register`;
		return this._httpClient.post<any>(url, newUser).pipe(
			map((res) => true),
			catchError((err) => of(false))
		);
	}

	forgotPassword(email: any): Observable<any> {
		const url: string = `${this.baseUrl}/forgot-password`;
		return this._httpClient.post<any>(url, email).pipe(
			map((res) => true),
			catchError((err) => of(false))
		);
	}

	/**
	 * @description Hace una peticion al backend para iniciar sesión
	 * @param authLogin
	 * @returns Observable<any>
	 */
	login(authLogin: AuthLogin): Observable<any> {
		const url: string = `${this.baseUrl}/login`;

		return this._httpClient.post<AuthResponse>(url, authLogin).pipe(
			// Actualiza los datos del usuario que vienen del backend
			tap((res: AuthResponse) => {
				if (res.ok) {
					// Agregando datos al localStorage
					localStorage.setItem('token', res.token!);
					localStorage.setItem('name', res.name!);
					this._user = {
						uuid: res.uuid!,
						name: res.name!,
						token: res.token!,
					};
				}
			}),

			// Devuelve true si el usuario esta registrado
			map((res: AuthResponse) => res.ok),

			// Devuelve un false si el usuario no esta registrado
			catchError((err) => of(err.error.message))
		);
	}

	logout(): Observable<any> {
		const url: string = `${this.baseUrl}/logout`;
		return this._httpClient.post<any>(url, {}).pipe(
			// Actualiza los datos del usuario que vienen del backend
			tap((res) => {
				if (res.ok) {
					// Elimino datos al localStorage
					localStorage.clear();
					this._user = {};
				}
			}),

			// Devuelve true si todo salio bien
			map((res) => res.ok),

			// Devuelve un el mensaje de error para la alerta en caso contrario
			catchError((err) => of(err.error.message))
		);
	}

	validateToken(): Observable<boolean> {
		const url: string = `${this.baseUrl}/refresh-token`;
		return this._httpClient.get<AuthResponse>(url).pipe(
			map((res: AuthResponse) => {
				// Agregando datos al localStorage
				localStorage.setItem('token', res.token!);
				localStorage.setItem('name', res.name!);
				this._user = {
					uuid: res.uuid!,
					name: res.name!,
					token: res.token!,
				};
				return res.ok!;
			}),
			catchError((err) => of(false))
		);
	}
}
