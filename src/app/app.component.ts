import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BarbaraComponent } from './components/barbara/barbara.component';
import { counter } from './types/typesOfCounter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(BarbaraComponent) actions!: BarbaraComponent;

  counters: Array<counter> = [];
  position!: number;
  valueToChange!: number;
  isDisabled: boolean = false;

  constructor(private _ref: ChangeDetectorRef) {}

  // adding counters
  add = () => {
    this.isDisabled = false;
    this.counters.push({ value: 0, isZero: true });
    this._ref.detectChanges();
  };

  // showing result
  submit = () => (this.isDisabled = true);

  // increaseing counter value
  increase = (pos: number, num: number) => {
    this.update(pos, num);
    this.actions.increase();
  };

  // decreasing counter value
  decrease = (pos: number, num: number, isZero: boolean) => {
    if (!isZero || num > 0) {
      this.update(pos, num);
      this.actions.decreas();
    }
  };

  update = (pos: number, num: number) => {
    this.valueToChange = num;
    this.position = pos;
  };

  handleUpdatedValue(data: number) {
    if (data == 0) {
      this.counters[this.position] = { value: data, isZero: true };
    } else {
      this.counters[this.position] = { value: data, isZero: false };
    }
    this._ref.detectChanges();
  }
}
