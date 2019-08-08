import { Component, Input, OnInit  } from '@angular/core';
import {AppareilService} from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;
  // appareilName = 'Machine à laver';

   // apareilStatus = 'eteint';

  constructor(private appareilService: AppareilService) { }

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
  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
