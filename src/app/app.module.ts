import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { ProtectedModule } from './core/protected/protected.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		AuthModule,
		ProtectedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
