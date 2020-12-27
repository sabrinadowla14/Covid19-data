import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { any } from 'prop-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-app';
  globalData: any = {};
  allCountriesData: any = [];
  USData: any = {};

  constructor(public http: HttpClient) {
    this.http
      .get('https://api.covid19api.com/summary')
      .subscribe((value: any) => {
        this.globalData = value.Global;
        this.allCountriesData = value.Countries;

        if (this.allCountriesData) {
          this.allCountriesData.forEach(countryList => {
            if (countryList.CountryCode == 'US') {
              this.USData = countryList;
            }
          });
        }
      });
  }
}
