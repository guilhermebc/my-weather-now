import { Component, OnInit, Input } from '@angular/core';
import { ICard } from './card.interface';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() options: ICard;
  @Input() order: string;
  @Input() active: boolean;


  constructor() { }

  ngOnInit() {
  }

}
