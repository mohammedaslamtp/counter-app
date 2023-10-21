import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { sharedToModify } from 'src/app/services/shared-values.service';

@Component({
  selector: 'app-dawn',
  templateUrl: './dawn.component.html',
  styleUrls: ['./dawn.component.css'],
})
export class DawnComponent implements OnDestroy {
  @Output() valueFromDec = new EventEmitter<number>();
  NumberSubscription!: Subscription;

  decrease() {
    this.NumberSubscription = sharedToModify.subscribe((num) => {
      if (typeof num == 'number') {
        num--;
        this.valueFromDec.emit(num);
      }
    });
  }

  ngOnDestroy(): void {
    this.NumberSubscription?.unsubscribe();
  }
}
