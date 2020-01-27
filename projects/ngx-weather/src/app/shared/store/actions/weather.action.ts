import { IWeather } from './../models/weather.model';

export class GetCurrentWeather {
  static readonly type = '[Weather] Get';

  constructor(public city: string) { }
}

export class AddWeatherCity {
  static readonly type = '[Weather] Add';

  constructor(public payload: IWeather) { }
}
