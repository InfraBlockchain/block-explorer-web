import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Action } from '../../../models';

@Component({
  selector: 'app-account-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnChanges {

  isLoaded = false;
  actions: Action[] = [];
  lastIrreversibleBlockNum = 0;
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

  ngOnChanges() {
    if (this.newActions && this.newActions.lastIrrBlkNum && this.newActions.lastIrrBlkNum > 0) {
      this.isLoaded = true;
      this.lastIrreversibleBlockNum = this.newActions.lastIrrBlkNum;

      if (this.newActions.actions && this.newActions.actions.length > 0) {
        this.actions = this.actions.concat(this.newActions.actions);
        this.accountActionSequence = this.actions[this.actions.length - 1].receipt.recv_sequence;
      }

      this.newActions = null;
    }
  }

}
