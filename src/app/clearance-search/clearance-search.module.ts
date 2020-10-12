import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClearanceSearchRoutingModule } from './clearance-search-routing.module';
import { ClearanceSearchComponent } from './clearance-search.component';

@NgModule({
  declarations: [ClearanceSearchComponent],
  imports: [CommonModule, ClearanceSearchRoutingModule, ReactiveFormsModule],
})
export class ClearanceSearchModule {}
