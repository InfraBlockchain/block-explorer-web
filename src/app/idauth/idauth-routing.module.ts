import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentityAuthoritiesComponent } from './idauths/idauths.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IdentityAuthoritiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityAuthorityRoutingModule { }
