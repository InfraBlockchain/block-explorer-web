import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, share } from 'rxjs/operators';
import { EosService } from '../../services/eos.service';
import { Producer } from '../../models/Producer';

@Component({
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit {

  name$: Observable<string>;
  producer$: Observable<Producer>;

  constructor(
    private route: ActivatedRoute,
    private eosService: EosService
  ) { }

  ngOnInit() {
    this.name$ = this.route.params.pipe(
      map(params => params.id)
    );
    this.producer$ = combineLatest(
      this.name$,
      this.eosService.getChainStatus(),
      this.eosService.getProducers(),
      this.name$.pipe(
        switchMap(name => this.eosService.getAccount(name).pipe(
          map(accountRaw => ({ name: name, raw: accountRaw }))
        ))
      )
    ).pipe(
      map(([name, chainStatus, producers, account]) => {
        const producer = producers.find(prod => prod.owner === name);
        const index = producers.findIndex(prod => prod.owner === name);
        const votesToRemove = producers.reduce((acc, cur) => {
          const percentageVotes_ = cur.total_votes_weight / chainStatus.total_producer_vote_weight * 100;
          if (percentageVotes_ * 200 < 100) {
            acc += parseFloat(cur.total_votes_weight);
          }
          return acc;
        }, 0);
        const position = parseInt(index, 10) + 1;
        const percentageVotes = producer.total_votes_weight / chainStatus.total_producer_vote_weight * 100;
        return {
          ...producer,
          account: account,
          position: position,
          votes: percentageVotes.toFixed(2),
          totalVotes: producer.total_votes.toFixed(0),
          totalVotesWeight: producer.total_votes_weight.toFixed(2)
        };
      }),
      share()
    );
  }

}
