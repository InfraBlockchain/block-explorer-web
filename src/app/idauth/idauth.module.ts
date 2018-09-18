import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IdentityAuthorityRoutingModule } from './idauth-routing.module';

import { IdentityAuthoritiesComponent } from './idauths/idauths.component';

@NgModule({
  imports: [
    SharedModule,
    IdentityAuthorityRoutingModule
  ],
  declarations: [
    IdentityAuthoritiesComponent
  ]
})
export class IdentityAuthorityModule { }
