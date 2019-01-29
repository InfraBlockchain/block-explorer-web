import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard-chain-status',
  templateUrl: './chain-status.component.html',
  styleUrls: ['./chain-status.component.scss']
})
export class ChainStatusComponent implements OnInit {

  networkName = environment.networkName;
  status$;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.status$ = this.appService.chainStatus$;
  }

}
