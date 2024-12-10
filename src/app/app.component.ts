import { WeatherData } from './models/weather.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cityName: string = "Toronto";
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService){
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    }

    onSubmit(){
      this.getWeatherData(this.cityName);
      this.cityName = "";
    }

    private getWeatherData(cityName: string): void {
      this.weatherService.getWeatherData(cityName).subscribe({
        next: (response: any) => {
          console.log('Weather Data:', response);
          this.weatherData = response;
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
        }
      });
    }

}
