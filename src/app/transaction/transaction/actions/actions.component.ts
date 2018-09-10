import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Input() transactionActions;
  actionsColumns = [
    'index',
    'global_seq',
    'account',
    'receiver',
    'authorization',
    'name',
    'inline',
    'data'
  ];

  constructor() { }

  ngOnInit() {
  }

}
