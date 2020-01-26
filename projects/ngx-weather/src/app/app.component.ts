import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-weather';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentWeatherByCityName('Urubici,br').subscribe((data) => {
      console.log(11, data);
    });
  }
}
