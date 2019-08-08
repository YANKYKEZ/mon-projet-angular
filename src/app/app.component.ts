import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {interval} from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  secondes: number;
 constructor() {

 }
 ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;

      },
      (error: any) => {
        console.log('Une erreur a été rencontrée !');
      },
      () => {
        console.log('Observable complétée !');
      }
    );
 }

}

