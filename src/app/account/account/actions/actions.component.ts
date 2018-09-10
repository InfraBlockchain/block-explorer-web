import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnChanges {

  @Input() actions;
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
    if (this.newActions && this.newActions.length > 0) {
      this.actions = this.actions.concat(this.newActions);
      this.newActions = null;
    }
    if (this.actions && this.actions.length > 0) {
      this.accountActionSequence = this.actions[this.actions.length - 1].receipt.recv_sequence;
    }
  }

}
