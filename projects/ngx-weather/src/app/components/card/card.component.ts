import { IWeather } from './../../shared/store/models/weather.model';
import { GetCurrentWeather } from './../../shared/store/actions/weather.action';
import { WeatherState } from './../../shared/store/states/weather.state';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() city: string;
  @Input() order: string;
  @Input() active: boolean;

  @Select(WeatherState.getWeatherCities) cities$: Observable<IWeather[]>;

  citiesSubscription: Subscription;
  options: IWeather;
  hasLoaded = false;
  hasError = false;

  constructor(private store: Store) { }

  ngOnInit() {
    this.fetchWeatherCity();

    this.loadWeatherData();
  }

  ngOnChanges() {
    if (this.citiesSubscription) {
      this.citiesSubscription.unsubscribe();
    }

    this.loadWeatherData();
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

  ngOnDestroy() {
    this.citiesSubscription.unsubscribe();
  }
}
