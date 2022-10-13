import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PaginatePipe } from './pipes/paginate.pipe';
import { SharedComponent } from './shared.component';
import { MaterialModule } from '../material.module';

@NgModule({
	declarations: [SharedComponent, PaginatePipe, SharedComponent],
	exports: [SharedComponent],
	imports: [CommonModule, SharedRoutingModule, MaterialModule],
})
export class SharedModule {}
