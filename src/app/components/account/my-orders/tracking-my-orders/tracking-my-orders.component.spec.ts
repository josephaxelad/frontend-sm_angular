import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingMyOrdersComponent } from './tracking-my-orders.component';

describe('TrackingMyOrdersComponent', () => {
  let component: TrackingMyOrdersComponent;
  let fixture: ComponentFixture<TrackingMyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingMyOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
