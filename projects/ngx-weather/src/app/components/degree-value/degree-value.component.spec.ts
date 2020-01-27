import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConverterPipe } from './../../pipes/temperature-converter.pipe';
import { DegreeValueComponent } from './degree-value.component';
import { By } from '@angular/platform-browser';

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

  it('should set degree value', () => {
    component.value = 262.15;
    fixture.detectChanges();
    expect(component.value).toEqual(262.15);
  });

  it('should class named cold be defined', () => {
    component.value = 250.15;
    const cold = fixture.debugElement.nativeElement.querySelector('cold');
    fixture.detectChanges();

    expect(cold).toBeDefined();
  });
});
