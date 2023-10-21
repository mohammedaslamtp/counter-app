import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DawnComponent } from '../dawn/dawn.component';
import { EmreComponent } from '../emre/emre.component';

@Component({
  selector: 'app-barbara',
  templateUrl: './barbara.component.html',
  styleUrls: ['./barbara.component.css'],
})
export class BarbaraComponent {
  @ViewChild(EmreComponent) incAction!: EmreComponent;
  @ViewChild(DawnComponent) decAction!: DawnComponent;
  @Output() updatedValue = new EventEmitter<number>();

  handleInreasedValue(data: number) {
    this.updatedValue.emit(data);
  }

  handleDecreasedValue(data: number) {
    this.updatedValue.emit(data);
  }

  increase() {
    this.incAction.increase();
  }

  decreas() {
    this.decAction.decrease();
  }
}
