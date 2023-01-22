import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyOrdersComponent } from './all-my-orders.component';

describe('AllMyOrdersComponent', () => {
  let component: AllMyOrdersComponent;
  let fixture: ComponentFixture<AllMyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMyOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
