import { NgModule } from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { WeatherState } from './states/weather.state';
import { environment } from '../../../environments/environment';


@NgModule({
  imports: [
    NgxsModule.forRoot([
      WeatherState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
  ]
})
export class StoreModule { }
