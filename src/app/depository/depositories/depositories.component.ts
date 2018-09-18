import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EosService } from '../../services/eos.service';
import { Depository } from '../../models/Depository';
import { Observable, of, timer } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './depositories.component.html',
  styleUrls: ['./depositories.component.scss']
})
export class DepositoriesComponent implements OnInit {

  columnHeaders$: Observable<string[]> = of(DEPOSITORIES_COLUMNS);
  depositories$: Observable<Depository[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private eosService: EosService
  ) { }

  ngOnInit() {
    this.columnHeaders$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      map(result => result.matches ? DEPOSITORIES_COLUMNS.filter((c: any) => (c !== 'url' && c !== 'position')) : DEPOSITORIES_COLUMNS)
    );
    this.depositories$ = this.eosService.getDepositories().pipe(
      map(depositories => {
        return depositories.map((producer, index) => {
          const position = parseInt(index, 10) + 1;
          return {
            ...producer,
            position: position,
          };
        });
      })
    );
  }

}

export const DEPOSITORIES_COLUMNS = [
  'position',
  'owner',
  'url',
  'location',
  'authorized'
];