import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {AppareilService} from './service/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  // @ts-ignore
  myDate = new  Promise(
    ((resolve, reject) => {
      const date = new  Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    } )
  );
  isAuth = false;
  appareils = [
    {
      name: 'Machine à laver',
      status : 'éteint'
    },
    {
      name: 'Ordinateur',
      status : 'Allumé'
    },
    {
      name: 'Téleviseur',
      status : 'éteint'
    },
    {
      name: 'Fer à repassé',
      status : 'éteint'
    }
  ];
  bodyTitle = 'This is the first day of month';
  constructor(private datePipe: DatePipe, private appareilService: AppareilService) {
    // @ts-ignore
   // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

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

