import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  myDate = new Date();
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Fer à repasser ';
  appareilTree = 'Refregirator';
  bodyTitle = 'This is the first day of month';
  constructor(private datePipe: DatePipe) {
    // @ts-ignore
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tous');
  }
}

