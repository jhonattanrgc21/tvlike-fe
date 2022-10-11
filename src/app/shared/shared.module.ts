import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
	declarations: [PaginatePipe],
	imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
