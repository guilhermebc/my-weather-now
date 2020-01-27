import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { StoreModule } from './shared/store/store.module';
import { CardComponent } from './components/card/card.component';
import { DegreeValueComponent } from './components/degree-value/degree-value.component';
import { HeaderComponent } from './components/header/header.component';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule
      ],
      declarations: [
        AppComponent,
        CardComponent,
        DegreeValueComponent,
        HeaderComponent,
        TemperatureConverterPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ngx-weather'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ngx-weather');
  // });

});
