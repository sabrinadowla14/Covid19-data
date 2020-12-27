import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnChanges {
  @Input() USData: any;

  constructor() {}

  ngOnChanges() {
    if (this.USData.length != 0) {
      console.log(this.USData);
    }
  }
}
