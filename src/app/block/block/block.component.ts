import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EosService } from '../../services/eos.service';
import { Result } from '../../models';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {BlockService} from '../../services/block.service';

@Component({
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  id$: Observable<number>;
  block$: Observable<Result<any>>;

  constructor(
    private route: ActivatedRoute,
    // private eosService: EosService
    private blockService: BlockService
  ) { }

  ngOnInit() {
    this.id$ = this.route.params.pipe(
      map(params => +params.id)
    );
    this.block$ = this.id$.pipe(
      // switchMap(id => this.eosService.getBlockRaw(id))
      switchMap(id => this.blockService.getBlock(id))
    );
  }

}
