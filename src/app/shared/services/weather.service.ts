import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    baseUrl:string = "https://api.openweathermap.org/data/2.5";
    appid:string = '55171b864dbef67f9c89dcb021d42023';

    constructor(private httpClient : HttpClient) {}

    getForecast(days:number){
      let params = {
        lat: '48.679875',
        lon: '44.893663',
        cnt: days.toString(),
        appid: this.appid,
        units: 'metric'
      }
      return this.httpClient.get(this.baseUrl + '/forecast/daily', { params: params })
    }

}
