import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export const sharedToModify = new BehaviorSubject<number | null>(null);
@Injectable()
export class SharedValuesService {
  constructor() {}
}
