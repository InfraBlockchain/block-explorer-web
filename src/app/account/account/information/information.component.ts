import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-account-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {

  @Input() account;

  constructor() { }

}
