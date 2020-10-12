import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ClearanceSearchComponent } from './clearance-search.component'
import { CreateSubmissionComponent } from './create-submission/create-submission.component'

const routes: Routes = [
  { path: '', component: ClearanceSearchComponent },
  { path: 'create-submission', component: CreateSubmissionComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClearanceSearchRoutingModule {}
