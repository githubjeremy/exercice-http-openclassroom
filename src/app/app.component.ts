import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  constructor(
  ) {
  }

  ngOnInit() {
    // counter is an observable that return new number incrementing every 2 secondes
    const counter = interval(2000);
    // .subscribe is use to observe an observable
    this.counterSubscription = counter.subscribe(
      // exist each time the observable emit new data
      (value) => {
        this.secondes = value;
      },
      // exist for each error
      (error) => {
        console.log('attention erreur :', error);
      },
      // exist when the observable is closed
      () => {
        console.log('Observable terminé');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
