import { TemperatureConverterPipe } from './temperature-converter.pipe';

describe('TemperatureConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should converter from Kelvin to Fahrenheit', () => {
    const pipe = new TemperatureConverterPipe();

    expect(pipe.transform(262.15, 'C')).toEqual('-11');
  });

  it('should converter from Kelvin to Fahrenheit', () => {
    const pipe = new TemperatureConverterPipe();

    expect(pipe.transform(262.15, 'F')).toEqual('12');
  });
});
