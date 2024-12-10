export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  name: string;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
  feels_like: number;
}

export interface Wind {
  speed: number;
  deg: number;
}
