import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbaraComponent } from './barbara.component';

describe('BarbaraComponent', () => {
  let component: BarbaraComponent;
  let fixture: ComponentFixture<BarbaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbaraComponent]
    });
    fixture = TestBed.createComponent(BarbaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
