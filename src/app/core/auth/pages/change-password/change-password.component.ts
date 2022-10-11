import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
	changePasswordForm!: FormGroup;
	token: string = '';

	constructor(
		private _activatedRoute: ActivatedRoute,
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
		this.changePasswordForm = this.fb.group({
			newPassword: ['', [Validators.required, Validators.minLength(8)]],
			confirmPassword: [
				'',
				[Validators.required, Validators.minLength(8)],
			],
		});
	}

	ngOnInit(): void {
		this.token = this._activatedRoute.snapshot.params['token'];
	}

	/**
	 * @description Verifica si el loginForm no es valido
	 * @param field
	 * @returns boolean
	 */
	isNotValid(field: string): boolean {
		return (
			this.changePasswordForm.controls[field].invalid &&
			this.changePasswordForm.controls[field].touched
		);
	}

	onChangePassword(): void {
		const changePassword = this.changePasswordForm.value;
	}
}
