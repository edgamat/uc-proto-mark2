import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ClearanceSearchComponent } from './clearance-search.component'

const routes: Routes = [{ path: '', component: ClearanceSearchComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClearanceSearchRoutingModule {}
