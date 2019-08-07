import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {AppareilService} from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
  appareils: any[];
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

  ngOnInit(): void {
    // @ts-ignore
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

}
