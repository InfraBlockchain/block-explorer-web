import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Action } from '../models/Action';
import { ActionsForAccount } from '../models/ActionsForAccount';

@Injectable()
export class ActionService {

  constructor(
    private http: HttpClient
  ) { }

  getReceivedActionsByAccount(account: string, start_recv_seq: number, offset: number): Observable<ActionsForAccount> {
    return this.http.get(`${environment.apiUrl}/account/${account}/actions/received`, {
      params: new HttpParams({
        fromString: `start=${start_recv_seq}&offset=${offset}`
      })
    }).pipe(
      map(actions => actions as ActionsForAccount )
    );
  }

  getSentActionsByAccount(account: string, start_global_seq: number, offset: number): Observable<ActionsForAccount> {
    return this.http.get(`${environment.apiUrl}/account/${account}/actions/sent`, {
      params: new HttpParams({
        fromString: `start=${start_global_seq}&offset=${offset}`
      })
    }).pipe(
      map(actions => actions as ActionsForAccount )
    );
  }

  getAction(id: string): Observable<Action> {
    return this.http.get(`${environment.apiUrl}/action/${id}`).pipe(
      map(action => action as Action)
    );
  }

  getActionSeq(trxId: string, seq = 0, parentId = 0): Observable<Action> {
    return this.http.get(`${environment.apiUrl}/transaction/${trxId}/actions/${seq}?parentId=${parentId}`).pipe(
      map(action => action as Action)
    );
  }

  getActions(page = 1): Observable<Action[]> {
    return this.http.get(`${environment.apiUrl}/actions`, {
      params: new HttpParams({
        fromString: `page=${page}`
      })
    }).pipe(
      map((actions: any) => actions.map(action => action as Action))
    );
  }

}
