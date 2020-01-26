import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from './shared/store/store.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DegreeValueComponent } from './components/degree-value/degree-value.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DegreeValueComponent,
    HeaderComponent,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    StoreModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
