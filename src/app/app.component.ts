import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  temperature = 111;
  coldImageUrl = 'assets/cold.jpg';
  hotImageUrl = 'assets/hot.jpg';
  imageUrl!: string;

  weatherState = 'Cloudy';
  minTemp = 5;
  maxTemp = 15;
  feelsLike = 8;
  humidity = 80;
  windSpeed = 5;

  constructor(){
    this.updateImage();
  }

  updateImage(): void {
    if (this.temperature < 15) {
      this.imageUrl = this.coldImageUrl;
    } else {
      this.imageUrl = this.hotImageUrl;
    }
  }
}
