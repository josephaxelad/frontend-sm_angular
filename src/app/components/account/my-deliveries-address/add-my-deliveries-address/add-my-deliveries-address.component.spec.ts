import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyDeliveriesAddressComponent } from './add-my-deliveries-address.component';

describe('AddMyDeliveriesAddressComponent', () => {
  let component: AddMyDeliveriesAddressComponent;
  let fixture: ComponentFixture<AddMyDeliveriesAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyDeliveriesAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyDeliveriesAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
