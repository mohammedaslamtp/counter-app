import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DawnComponent } from './dawn.component';

describe('DawnComponent', () => {
  let component: DawnComponent;
  let fixture: ComponentFixture<DawnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DawnComponent]
    });
    fixture = TestBed.createComponent(DawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
