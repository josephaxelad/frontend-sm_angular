import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMyOrdersComponent } from './details-my-orders.component';

describe('DetailsMyOrdersComponent', () => {
  let component: DetailsMyOrdersComponent;
  let fixture: ComponentFixture<DetailsMyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMyOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
