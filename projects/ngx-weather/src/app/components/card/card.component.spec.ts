import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardComponent } from './card.component';
import { DegreeValueComponent } from '../degree-value/degree-value.component';
import { TemperatureConverterPipe } from './../../pipes/temperature-converter.pipe';
import { StoreModule } from '../../shared/store/store.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const options = {
    name: 'Urubici, BR',
    degree: 286.12,
    pressure: 992,
    humidity: 78,
    updatedDate: new Date()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule, HttpClientTestingModule ],
      declarations: [ CardComponent, DegreeValueComponent, TemperatureConverterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set options data', () => {
    component.options = options;
    fixture.detectChanges();
    expect(component.options).toEqual(options);
    expect(component.options.name).toEqual('Urubici, BR');
  });
});
