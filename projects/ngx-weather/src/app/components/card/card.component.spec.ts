import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardComponent } from './card.component';
import { DegreeValueComponent } from '../degree-value/degree-value.component';
import { TemperatureConverterPipe } from './../../pipes/temperature-converter.pipe';
import { StoreModule } from '../../shared/store/store.module';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
