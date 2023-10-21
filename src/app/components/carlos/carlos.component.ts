import {
  Component,
  OnChanges,
  SimpleChanges,
  OnInit,
  Input,
} from '@angular/core';
import { sharedValue } from 'src/app/services/counter.service';

import { sharedToModify } from 'src/app/services/shared-values.service';

@Component({
  selector: 'app-carlos',
  templateUrl: './carlos.component.html',
  styleUrls: ['./carlos.component.css'],
})
export class CarlosComponent implements OnChanges, OnInit {
  @Input() valueToUpdate!: number;
  ngOnInit(): void {
    sharedValue.subscribe((num) => {
      if (num) {
        this.valueToUpdate = num;
        sharedToModify.next(num);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['valueToUpdate']) {
      sharedToModify.next(this.valueToUpdate);
    }
  }
}
