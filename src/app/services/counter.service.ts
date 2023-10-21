import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const sharedValue = new BehaviorSubject<number | null>(null);
@Injectable({ providedIn: 'root' })
export class CounterService {}
