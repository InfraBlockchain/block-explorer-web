import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EosService } from '../../services/eos.service';
import { IdentityAuthority } from '../../models/IdentityAuthority';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './idauths.component.html',
  styleUrls: ['./idauths.component.scss']
})
export class IdentityAuthoritiesComponent implements OnInit {

  columnHeaders$: Observable<string[]> = of(IDENTITY_AUTHORITIES_COLUMNS);
  identityAuthorities$: Observable<IdentityAuthority[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private eosService: EosService
  ) { }

  ngOnInit() {
    this.columnHeaders$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      map(result => result.matches ? IDENTITY_AUTHORITIES_COLUMNS.filter((c: any) => (c !== 'location' && c !== 'position')) : IDENTITY_AUTHORITIES_COLUMNS)
    );
    this.identityAuthorities$ = this.eosService.getIdentityAuthorities().pipe(
      map(identityAuthorities => {
        return identityAuthorities.map((idauth, index) => {
          const position = parseInt(index, 10) + 1;
          return {
            ...idauth,
            position: position,
          };
        });
      })
    );
  }

}

export const IDENTITY_AUTHORITIES_COLUMNS = [
  'position',
  'owner',
  'url',
  'location',
  'authorized'
];