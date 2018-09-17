import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EosService } from '../../services/eos.service';
import { AppService } from '../../services/app.service';
import { Action, Result } from '../../models';
import {Observable, Subject} from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActionService } from '../../services/action.service';
import { ActionsForAccount } from '../../models/ActionsForAccount';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  reloadEventSubject: Subject<void> = new Subject<void>();
  name$: Observable<string>;
  account$: Observable<Result<any>>;
  accountNewReceivedActions$: Observable<ActionsForAccount>;
  accountNewSentActions$: Observable<ActionsForAccount>;
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
      switchMap(name => this.eosService.getAccountRaw(name))
      , tap(account => this.reloadEventSubject.next() )
    );
    this.accountNewReceivedActions$ = this.name$.pipe(
      switchMap(name => this.actionService.getReceivedActionsByAccount(name, -1, -this.actionsLoadSize))
      // , tap(a => console.log('accountNewReceivedActions$'))
    );
    this.accountNewSentActions$ = this.name$.pipe(
      switchMap(name => this.actionService.getSentActionsByAccount(name, -1, -this.actionsLoadSize))
      // , tap(a => console.log('accountNewSentActions$'))
    );
    this.accountAbi$ = this.name$.pipe(
      switchMap(name => this.eosService.getAbi(name))
    );
  }

  loadMoreReceivedActions(sequence) {
    this.accountNewReceivedActions$ = this.name$.pipe(
      switchMap(name => this.actionService.getReceivedActionsByAccount(name, sequence, -this.actionsLoadSize))
    );
  }

  loadMoreSentActions(sequence) {
    this.accountNewSentActions$ = this.name$.pipe(
      switchMap(name => this.actionService.getSentActionsByAccount(name, sequence, -this.actionsLoadSize))
    );
  }

}
