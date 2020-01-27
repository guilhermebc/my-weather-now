import { Injectable } from '@angular/core';
import { IWeather } from '../shared/store/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  TEN_MINUTES_MS = 600000;

  constructor() { }

  setItem(weatherCity: IWeather) {
    localStorage.setItem(weatherCity.name, JSON.stringify(weatherCity));
  }

  getItem(cityName: string): IWeather {
    return JSON.parse(localStorage.getItem(cityName));
  }

  removeItem(cityName: string) {
    localStorage.removeItem(cityName);
  }

  isValidWeatherByTimestamp(cityName: string): boolean {
    const currentTime = new Date(this.getItem(cityName).updatedDate).getTime();
    const tenMinutesFrom = currentTime + this.TEN_MINUTES_MS;

    return tenMinutesFrom > new Date().getTime();
  }
}
