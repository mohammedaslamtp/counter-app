import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { sharedToModify } from 'src/app/services/shared-values.service';

@Component({
  selector: 'app-emre',
  templateUrl: './emre.component.html',
  styleUrls: ['./emre.component.css'],
})
export class EmreComponent implements OnDestroy {
  @Output() valueFromInc = new EventEmitter<number>();
  NumberSubscription!: Subscription;

  increase() {
    this.NumberSubscription = sharedToModify.subscribe((num) => {
      if (typeof num == 'number') {
        num++;
        this.valueFromInc.emit(num);
      }
    });
  }

  ngOnDestroy(): void {
    this.NumberSubscription?.unsubscribe();
  }
}
