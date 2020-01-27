import { UpdateLoader } from './../actions/weather.action';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { GetCurrentWeather, AddWeatherCity } from '../actions/weather.action';
import { ICurrentWeather, IWeather } from './../models/weather.model';

import { LocalStorageService } from './../../../services/local-storage.service';
import { WeatherService } from './../../../services/weather.service';


export class WeatherStateModel {
  weatherCities: IWeather[];
}

@State<WeatherStateModel>({
  name: 'weather',
  defaults: {
    weatherCities: []
  }
})
export class WeatherState {

  constructor(
    private weatherService: WeatherService,
    private localStorageService: LocalStorageService
  ) { }

  @Selector()
  static getWeatherCities(state: WeatherStateModel): IWeather[] {
    return state.weatherCities;
  }

  @Action(GetCurrentWeather)
  getCurrentWeather({ dispatch }: StateContext<WeatherStateModel>, params: GetCurrentWeather) {
      const currentWeatherByLocalStorage = this.localStorageService.getItem(params.city);

      if (
        currentWeatherByLocalStorage &&
        this.localStorageService.isValidWeatherByTimestamp(params.city)
      ) {
        dispatch(new AddWeatherCity(currentWeatherByLocalStorage));

      } else {
        return this.weatherService.getCurrentWeatherByCityName(params.city).pipe(
          tap((result: ICurrentWeather) => {
            const newWeather: IWeather = {
              id: result.id,
              name: `${result.name}, ${result.sys.country}`,
              degree: result.main.temp,
              humidity: result.main.humidity,
              pressure: result.main.pressure,
              updatedDate: new Date()
            };

            this.localStorageService.setItem(newWeather);
            dispatch(new AddWeatherCity(newWeather));

          }),
          catchError((error) => {
            return throwError(error);
          })
        );
      }
  }

  @Action(AddWeatherCity)
  addCity({getState, patchState}: StateContext<WeatherStateModel>, params: AddWeatherCity) {
    const state = getState();
    patchState({
      weatherCities: [...state.weatherCities, params.payload]
    });
  }
}
