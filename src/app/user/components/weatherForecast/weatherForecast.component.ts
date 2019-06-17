import { Component } from '@angular/core';
import { WeatherService } from '../../../shared/services/weather.service';

@Component({
  selector: 'weather-forecast',
  templateUrl: './weatherForecast.component.html'
})

export class WeatherForecastComponent {
  forecast:any;

  constructor(private weather: WeatherService ){
    let forecast = weather.getForecast(7).subscribe((forecast) => {
      console.log('forecast! ', forecast);
      this.forecast = forecast;
    });
  }
}
