import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareil: any;
  @Input() index: number;

  constructor(
    private appareilService: AppareilService
  ) {
   }

  ngOnInit() {
  }

  getStatus() {
    return this.appareil.status;
  }

  getColor() {
    if (this.appareil.status === 'allumé') {
      return 'green';
    } else if (this.appareil.status === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareil.status === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareil.status === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
