export interface IWeather {
  id?: number;
  cod?: number;
  name?: string;
  degree?: number;
  humidity?: number;
  pressure?: number;
  updatedDate?: Date;
}

export interface ICurrentWeather {
  coord?: {
    lon: number;
    lat: number;
  };
  weather?: [
    {
      id: number;
      main: string;
      description: string;
      icon: string
    }
  ];
  base?: string;
  main?: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  wind?: {
    speed: number;
    deg: number;
  };
  clouds?: {
    all: number;
  };
  dt?: number;
  sys?: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone?: number;
  id: number;
  name: string;
  cod: number;
}
