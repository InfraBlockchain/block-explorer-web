import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EosService } from '../../services/eos.service';
import { SystemToken } from '../../models/SystemToken';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './depositories.component.html',
  styleUrls: ['./depositories.component.scss']
})
export class DepositoriesComponent implements OnInit {

  columnHeaders$: Observable<string[]> = of(SYSTEM_TOKEN_COLUMNS);
  systokens$: Observable<SystemToken[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private eosService: EosService
  ) { }

  ngOnInit() {
    this.columnHeaders$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      map(result => result.matches ? SYSTEM_TOKEN_COLUMNS.filter((c: any) => (c !== 'location' && c !== 'position')) : SYSTEM_TOKEN_COLUMNS)
    );
    this.systokens$ = this.eosService.getSystemTokenList().pipe(
      map(systokens => {
        return systokens.map((systoken, index) => {
          const position = parseInt(index, 10) + 1;
          return {
            ...systoken,
            position: position,
          };
        });
      })
    );
  }

}

export const SYSTEM_TOKEN_COLUMNS = [
  'position',
  'tokenid',
  'weight',
  'symbol',
  'totalsupply',
  'url',
  'description'
];
