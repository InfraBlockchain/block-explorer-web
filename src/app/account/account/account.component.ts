import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EosService } from '../../services/eos.service';
import { AppService } from '../../services/app.service';
import { Action, Result } from '../../models';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActionService } from '../../services/action.service';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  name$: Observable<string>;
  account$: Observable<Result<any>>;
  accountActions$: Observable<Action[]>;
  accountNewActions$: Observable<Action[]>;
  accountAbi$: Observable<Result<any>>;
  actionsLoadSize = 20;

  constructor(
    private route: ActivatedRoute,
    private actionService: ActionService,
    private eosService: EosService,
    public app: AppService
  ) { }

  ngOnInit() {
    this.name$ = this.route.params.pipe(
      map(params => params.id)
    );
    this.account$ = this.name$.pipe(
      switchMap(name => this.eosService.getAccountRaw(name)),
      tap(account => console.log('account', account))
    );
    this.accountActions$ = this.name$.pipe(
      switchMap(name => this.actionService.getActionsForAccount(name, -1, -this.actionsLoadSize))
    );
    this.accountAbi$ = this.name$.pipe(
      switchMap(name => this.eosService.getAbi(name))
    );
  }

  loadMore(sequence) {
    this.accountNewActions$ = this.name$.pipe(
      switchMap(name => this.actionService.getActionsForAccount(name, sequence, -this.actionsLoadSize))
    );
  }

}
