import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Transaction } from '../models/Transaction';
import { Action } from '../models/Action';
import { Result } from '../models/Result';
import { EosService } from './eos.service';
import { TransactionDetail } from '../models/TransactionDetail';
import { LoggerService } from './logger.service';

@Injectable()
export class TransactionService {

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  getTransaction(id: string): Observable<Result<TransactionDetail>> {
    return this.http.get(`${environment.apiUrl}/transaction/${id}`).pipe(
      map(transaction => {
        return <Result<TransactionDetail>>{
          isError: false,
          value: transaction as TransactionDetail
        };
      }),
      catchError(error => {
        this.logger.error('API_ERROR', error);
        return of({
          isError: true,
          value: error
        });
      })
    );
  }

  getTransactions(page = 1, size = 30): Observable<Transaction[]> {
    return this.http.get(`${environment.apiUrl}/transactions`, {
      params: new HttpParams({
        fromString: `page=${page}&size=${size}`
      })
    }).pipe(
      map((transactions: any) => transactions.map(transaction => transaction as Transaction))
    );
  }

  getTransactionActions(id: string, page = 1): Observable<Action[]> {
    return this.http.get(`${environment.apiUrl}/transaction/${id}/actions`, {
      params: new HttpParams({
        fromString: `page=${page}`
      })
    }).pipe(
      map((actions: any) => actions.map(action => action as Action))
    );
  }
}
