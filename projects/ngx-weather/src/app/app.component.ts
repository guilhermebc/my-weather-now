import { Subscription } from 'rxjs';
import { Component, HostListener, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  weatherSubscription: Subscription;
  activeCard;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.activeCard.next('Urubici, BR');

    this.weatherService.activeCard.subscribe((data) => {
      this.activeCard = data;
    });
  }

  @HostListener('window:resize', ['$event'])
  orderCard(cityName): boolean {
    return this.activeCard === cityName && window.innerWidth < 992;
  }
}
