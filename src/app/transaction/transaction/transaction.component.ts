import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EosService } from '../../services/eos.service';
import { Result } from '../../models';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {TransactionService} from '../../services/transaction.service';
import {Action} from '../../models/Action';

@Component({
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transaction$: Observable<Result<any>>;
  transactionActions$: Observable<Action[]>;

  constructor(
    private route: ActivatedRoute,
    // private eosService: EosService
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transaction$ = this.route.params.pipe(
      // switchMap(params => this.eosService.getTransactionRaw(+params.blockId, params.id))
      switchMap(params => this.transactionService.getTransaction(params.id))
    );
    this.transactionActions$ = this.route.params.pipe(
      switchMap(params => this.transactionService.getTransactionActions(params.id))
    );
  }

}
