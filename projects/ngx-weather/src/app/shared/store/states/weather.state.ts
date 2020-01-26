import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IWeather } from './../models/weather.model';
import { WeatherService } from './../../../services/weather.service';
import { GetCurrentWeather } from '../actions/weather.action';
import { tap } from 'rxjs/operators';


export class WeatherStateModel {
  currentWeatherCities: IWeather[];
}

@State<WeatherStateModel>({
  name: 'weather',
  defaults: {
    currentWeatherCities: []
  }
})
export class WeatherState {

  constructor(private weatherService: WeatherService) { }

  @Selector()
  static getWeather(state: WeatherStateModel) {
    return state;
  }

  @Action(GetCurrentWeather)
  getCurrentWeather({getState, setState}: StateContext<WeatherStateModel>, params) {
      const state = getState();
      return this.weatherService.getCurrentWeatherByCityName(params)
        .pipe(
          tap((result) => {
          setState({
              ...state,
              currentWeatherCities: [ result ]
          });
      }));
  }
}
