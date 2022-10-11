import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailPattern, ROUTES } from 'src/app/shared/config/constants';
import { Register } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	registerForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {
		this.registerForm = this.fb.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			username: ['', [Validators.required]],
			email: [
				'',
				[
					Validators.required,
					Validators.email,
					Validators.pattern(emailPattern),
				],
			],
			password: ['', [Validators.required, Validators.minLength(8)]],
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
			this.registerForm.controls[field].invalid &&
			this.registerForm.controls[field].touched
		);
	}

	onRegister(): void {
		const newUser: Register = this.registerForm.value;
		this.router.navigateByUrl(ROUTES.login);
		/*this.authService.register(newUser).subscribe((ok) => {
			if (ok == true) {
				this.router.navigateByUrl(ROUTES.login);
			} else {
				Swal.fire('Error', ok, 'error');
			}
		});*/
	}
}
