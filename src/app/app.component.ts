import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {AppareilService} from './service/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent  {
 constructor() {

 }

}

