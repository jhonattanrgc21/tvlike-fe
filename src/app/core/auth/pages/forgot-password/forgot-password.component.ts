import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailPattern } from 'src/app/shared/config/constants';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
	forgotPasswordForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
		this.forgotPasswordForm = this.fb.group({
			email: [
				'',
				[
					Validators.required,
					Validators.email,
					Validators.pattern(emailPattern),
				],
			],
		});
	}

	ngOnInit(): void {}

	/**
	 * @description Verifica si el loginForm no es valido
	 * @param field
	 * @returns boolean
	 */
	isNotValid(field: string): boolean {
		return (
			this.forgotPasswordForm.controls[field].invalid &&
			this.forgotPasswordForm.controls[field].touched
		);
	}

	onSendEmail(): void {
		const email = this.forgotPasswordForm.value;
		/*this.authService.forgotPassword(email).subscribe((ok) => {
			if (ok == true) {
				Swal.fire({
					title: 'Enviado',
					text: 'Se ha enviado a su correo un enlace de recuperación de contraseña!',
					icon: 'success',
				});
			} else {
				Swal.fire('Error', ok, 'error');
			}
		});*/
	}
}
