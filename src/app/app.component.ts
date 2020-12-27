import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-app';
  globalData: any = 'Please wait API will take some time!!';

  constructor(public http: HttpClient) {
    this.http
      .get('https://api.covid19api.com/summary')
      .subscribe((value: any) => {
        // console.log(value.Global);
        this.globalData = value.Global;
        console.log(this.globalData);
      });
  }
}
