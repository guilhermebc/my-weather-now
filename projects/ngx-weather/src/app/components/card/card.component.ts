import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { WeatherService } from './../../services/weather.service';
import { IWeather } from './../../shared/store/models/weather.model';
import { GetCurrentWeather } from './../../shared/store/actions/weather.action';
import { WeatherState } from './../../shared/store/states/weather.state';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() city: string;
  @Input() order: string;
  @Input() active: boolean;

  @Select(WeatherState.getWeatherCities) cities$: Observable<IWeather[]>;

  weatherSubscription: Subscription;
  citiesSubscription: Subscription;
  options: IWeather;
  hasLoaded = false;
  hasError = false;

  constructor(private store: Store, private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchWeatherCity();

    this.loadWeatherData();

    this.weatherSubscription = this.weatherService.toggleWeatheDetail().subscribe((value) => {
      this.active = value === this.city;
    });
  }

  fetchWeatherCity() {
    this.hasLoaded = false;
    this.hasError = false;
    this.options = {};
    this.store.dispatch(new GetCurrentWeather(this.city));
  }

  loadWeatherData() {
    this.citiesSubscription = this.cities$
    .subscribe((data) => {
      const weatherOptions = data.find((weather) => weather.name === this.city);
      if (weatherOptions) {
        this.options = weatherOptions;
        this.hasLoaded = true;
      }
    },
    (error) => {
      this.hasLoaded = true;
      this.hasError = true;
      throw new Error(error);
    });
  }

  onCardClicked(evt) {
    this.weatherService.setActiveCard(this.city);
  }

  ngOnDestroy() {
    this.citiesSubscription.unsubscribe();
    this.weatherSubscription.unsubscribe();
  }
}
