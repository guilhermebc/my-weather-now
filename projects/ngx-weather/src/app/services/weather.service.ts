import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICurrentWeather } from '../shared/store/models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = environment.api_key;

  get baseUrl() {
    return environment.api_url;
  }

  constructor(private http: HttpClient) { }

  getCurrentWeatherByCityName(cityName: string) {
    return this.http.get<ICurrentWeather>(`${this.baseUrl}/data/2.5/weather`, { params: { appId: this.apiKey, q: cityName }});
  }
}
