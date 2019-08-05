import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  // appareilName = 'Machine à laver';

   // apareilStatus = 'eteint';

  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'éteint') {
      return 'red';
    } else  if (this.appareilStatus === 'Allumé') {
      return 'green';
    }
  }


}
