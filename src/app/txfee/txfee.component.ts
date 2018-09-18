import { Component, OnInit } from '@angular/core';
import { EosService } from '../services/eos.service';
import { TransactionFee } from '../models/TransactionFee';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { trxfeemeta } from '../../environments/trxfee';

@Component({
  templateUrl: './txfee.component.html',
  styleUrls: ['./txfee.component.scss']
})
export class TxFeeComponent implements OnInit {

  txfees$: Observable<TransactionFee[]>;

  txfeeColumns = [
    'operation',
    'name',
    'action',
    'fee',
    'note'
  ];

  txfeeAccount = trxfeemeta.txfeeAccount;

  constructor(
    private eosService: EosService
  ) { }

  ngOnInit() {
    this.txfees$ = this.eosService.getTransactionFees().pipe(
      map(txfees => {
        // console.log(txfees);
        return txfees.map((txfee, index) => {
          const position = parseInt(index, 10) + 1;
          let operationName = '';
          let actionAccount = '';
          let actionName = '';
          let note = '';
          if (trxfeemeta.operations.hasOwnProperty(txfee.operation)) {
            const opMeta = trxfeemeta.operations[txfee.operation]
            operationName = opMeta.opName;
            actionAccount = opMeta.actAccount;
            actionName = opMeta.actName;
            note = opMeta.note;
          }
          const feeStr = (txfee.fee / trxfeemeta.precisionScale).toFixed(4) + ' ' + trxfeemeta.symbol;
          return {
            position: position,
            operationName: operationName,
            actionAccount: actionAccount,
            actionName: actionName,
            feeStr: feeStr,
            note: note,
            operation: txfee.operation,
            fee: txfee.fee,
          };
        }).sort((a, b) => (a.actionAccount).localeCompare(b.actionAccount));
      })
    );
  }

}
