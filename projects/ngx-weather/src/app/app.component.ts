import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IWeather } from './shared/store/models/weather.model';
import { WeatherState } from './shared/store/states/weather.state';
import { GetCurrentWeather } from './shared/store/actions/weather.action';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
