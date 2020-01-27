import { Component, OnInit, Input } from '@angular/core';
import { TemperatureConverterPipe } from '../../pipes/temperature-converter.pipe';

@Component({
  selector: 'ngx-degree-value',
  templateUrl: './degree-value.component.html',
  styleUrls: ['./degree-value.component.scss']
})
export class DegreeValueComponent implements OnInit {

  @Input() value: number;
  tempColor = '';

  constructor() { }

  ngOnInit() {
    this.tempColorResolver();
  }

  tempColorResolver() {
    const pipe = new TemperatureConverterPipe();
    const convertedTemp = parseInt(pipe.transform(this.value, 'C'), 10);

    if (convertedTemp < 5) {
      this.tempColor = 'cold';
    } else if (convertedTemp > 5 && convertedTemp <= 25) {
      this.tempColor = 'regular';
    } else {
      this.tempColor = 'hot';
    }
  }

}
