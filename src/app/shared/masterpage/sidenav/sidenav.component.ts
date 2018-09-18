import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navs: {
    icon: string;
    link: string;
    name: string;
    external?: boolean;
  }[];

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.navs = [
      {
        icon: 'view_quilt', // 'dashboard',
        link: '/',
        name: this.translate.instant('Dashboard')
      },
      // {
      //   icon: 'people',
      //   link: '/accounts',
      //   name: this.translate.instant('Accounts')
      // },
      {
        icon: 'all_inclusive', // 'link',
        link: '/blocks',
        name: this.translate.instant('Blocks')
      },
      {
        icon: 'fingerprint', // 'list_alt',
        link: '/transactions',
        name: this.translate.instant('Transactions')
      },
      {
        icon: 'verified_user', // 'check_circle',
        link: '/producers',
        name: this.translate.instant('Block Producers')
      },
      {
        icon: 'account_balance',
        link: '/depositories',
        name: this.translate.instant('Depositories')
      },
      {
        icon: 'how_to_reg',
        link: '/idauthorities',
        name: this.translate.instant('ID Authorities')
      }
      // {
      //   icon: 'list',
      //   link: '/actions',
      //   name: this.translate.instant('Actions')
      // }

    ];
  }

}
