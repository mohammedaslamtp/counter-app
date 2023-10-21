import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmreComponent } from './emre.component';

describe('EmreComponent', () => {
  let component: EmreComponent;
  let fixture: ComponentFixture<EmreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmreComponent]
    });
    fixture = TestBed.createComponent(EmreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
