import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { ClearanceSearchRoutingModule } from './clearance-search-routing.module';
import { ClearanceSearchComponent } from './clearance-search.component';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InsuredData } from './insured-data';
import { SessionStore } from './session.store';
import { CreateSubmissionComponent } from './create-submission/create-submission.component';

@NgModule({
  declarations: [ClearanceSearchComponent, CreateSubmissionComponent],
  imports: [
    CommonModule,
    ClearanceSearchRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InsuredData),
    NgxLoadingModule.forRoot({})
  ],
  providers: [SessionStore]
})
export class ClearanceSearchModule {}
