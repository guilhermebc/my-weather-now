import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() active: boolean;
  constructor() { }

  ngOnInit() {
  }

}
