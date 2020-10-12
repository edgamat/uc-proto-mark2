import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { ClearanceSearchRoutingModule } from './clearance-search-routing.module';
import { ClearanceSearchComponent } from './clearance-search.component';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InsuredData } from './insured-data';

@NgModule({
  declarations: [ClearanceSearchComponent],
  imports: [
    CommonModule,
    ClearanceSearchRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InsuredData),
    NgxLoadingModule.forRoot({})],

})
export class ClearanceSearchModule {}
