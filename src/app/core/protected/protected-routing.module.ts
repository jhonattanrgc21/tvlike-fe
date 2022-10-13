import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [
	{
		path: '',
		component: ProtectedComponent,
		children: [
			{
				path: 'home',
				loadChildren: () =>
					import('./pages/home/home.module').then(
						(m) => m.HomeModule
					),
			},
			{
				path: 'movies',
				loadChildren: () =>
					import('./pages/movies/movies.module').then(
						(m) => m.MoviesModule
					),
			},
			{
				path: 'series',
				loadChildren: () =>
					import('./pages/series/series.module').then(
						(m) => m.SeriesModule
					),
			},
			{
				path: 'search',
				loadChildren: () =>
					import('./pages/search/search.module').then(
						(m) => m.SearchModule
					),
			},
			{
				path: 'genres',
				loadChildren: () =>
					import('./pages/genres/genres.module').then(
						(m) => m.GenresModule
					),
			},
			{
				path: 'trends',
				loadChildren: () =>
					import('./pages/trends/trends.module').then(
						(m) => m.TrendsModule
					),
			},
			{
				path: '**',
				redirectTo: 'home',
				pathMatch: 'full',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProtectedRoutingModule {}
