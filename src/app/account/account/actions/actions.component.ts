import { Component, OnChanges, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Action } from '../../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit, OnDestroy, OnChanges {

  reloadEventSubscription: any
  @Input() reloadEvent: Observable<void>;

  @Input() actionType: string; // "sent" or "received"
  @Input() pageSize: number;
  isLoaded = false;
  actions: Action[] = [];
  lastIrreversibleBlockNum = 0;
  lastLoadedActionCount = 0;
  @Input() newActions;
  @Output() onLoadMore = new EventEmitter<number>();
  actionsColumns = [
    'blockNum',
    'timestamp',
    'transactionId',
    'global_seq',
    'action_account_name',
    'authorization',
    'receiver',
    'recv_seq',
    'inline',
    'data'
  ];
  accountActionSequence = 0;

  constructor() { }

  ngOnInit() {
    this.reloadEventSubscription = this.reloadEvent.subscribe(() => this.reload() );
  }

  ngOnDestroy() {
    this.reloadEventSubscription.unsubscribe();
  }

  reload() {
    this.actions = []
    this.lastIrreversibleBlockNum = 0;
    this.lastLoadedActionCount = 0;
    this.isLoaded = false;
  }

  ngOnChanges() {
    if (this.newActions && this.newActions.lastIrrBlkNum && this.newActions.lastIrrBlkNum > 0) {
      this.isLoaded = true;
      this.lastIrreversibleBlockNum = this.newActions.lastIrrBlkNum;

      if (this.newActions.actions && this.newActions.actions.length > 0) {
        this.actions = this.actions.concat(this.newActions.actions);
        if (this.actionType === 'received') {
          this.accountActionSequence = this.actions[this.actions.length - 1].receipt.recv_sequence;
        } else {
          this.accountActionSequence = this.actions[this.actions.length - 1].receipt.global_sequence;
        }
      }
      this.lastLoadedActionCount = this.newActions.actions.length;

      this.newActions = null;
    }
  }

}
