import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },
	{ path: 'home', loadChildren: () => import('./core/protected/protected.module').then(m => m.ProtectedModule) },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
