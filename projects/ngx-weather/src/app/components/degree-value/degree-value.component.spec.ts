import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverterPipe } from './../../pipes/temperature-converter.pipe';
import { DegreeValueComponent } from './degree-value.component';

describe('DegreeValueComponent', () => {
  let component: DegreeValueComponent;
  let fixture: ComponentFixture<DegreeValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreeValueComponent, TemperatureConverterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
