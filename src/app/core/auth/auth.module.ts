import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

@NgModule({
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		ForgotPasswordComponent,
		ChangePasswordComponent,
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
	],
})
export class AuthModule {}
