import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {
  //  input as Kelvin
  transform(value: number, unit: string) {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        const temperature = value - 273.15;
        return temperature.toFixed(0);
      }
      if (unit === 'F') {
        const temperature = ((value - 273.15) * 1.8) + 32;
        return temperature.toFixed(0);
      }
    }
    return;
  }
}
