import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
	declarations: [ProtectedComponent],
	imports: [
		CommonModule,
		LayoutModule,
		SharedModule,
		ProtectedRoutingModule,
	],
})
export class ProtectedModule {}
