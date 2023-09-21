import { Component } from '@angular/core';
import * as d3 from 'd3';
import { data } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data!: undefined;

  ngOnInit() {
/*     d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((data: any) => {
      console.log(data);
      this.data = data;
      let prevIndex = 0;
    }); */
    this.data = data as any;
  }
}
