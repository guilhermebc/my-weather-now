import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-degree-value',
  templateUrl: './degree-value.component.html',
  styleUrls: ['./degree-value.component.scss']
})
export class DegreeValueComponent implements OnInit {

  @Input() value;

  constructor() { }

  ngOnInit() {
  }

}
