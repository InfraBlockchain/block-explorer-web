import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Block, Transaction, Result } from '../models';
import { BlockDetail } from '../models/BlockDetail';
import { LoggerService } from './logger.service';

@Injectable()
export class BlockService {

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  getBlock(blockNum: number): Observable<Result<BlockDetail>> {
    return this.http.get(`${environment.apiUrl}/block/${blockNum}`).pipe(
      map(block => {
        return <Result<BlockDetail>>{
          isError: false,
          value: block as BlockDetail
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

  getBlockById(blockId: string): Observable<Result<BlockDetail>> {
    return this.http.get(`${environment.apiUrl}/block/id/${blockId}`).pipe(
      map(block => {
        return <Result<BlockDetail>>{
          isError: false,
          value: block as BlockDetail
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

  getBlocks(page = 1, size = 30): Observable<Block[]> {
    return this.http.get(`${environment.apiUrl}/blocks`, {
      params: new HttpParams({
        fromString: `page=${page}&size=${size}`
      })
    }).pipe(
      map((blocks: any) => blocks.map(block => block as Block))
    );
  }

  getBlockTransactions(id: number, page = 1): Observable<Transaction[]> {
    return this.http.get(`${environment.apiUrl}/block/${id}/transactions`, {
      params: new HttpParams({
        fromString: `page=${page}`
      })
    }).pipe(
      map((transactions: any) => transactions.map(transaction => transaction as Transaction))
    );
  }
}
