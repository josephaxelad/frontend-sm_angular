import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyDeliveriesAddressComponent } from './edit-my-deliveries-address.component';

describe('EditMyDeliveriesAddressComponent', () => {
  let component: EditMyDeliveriesAddressComponent;
  let fixture: ComponentFixture<EditMyDeliveriesAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyDeliveriesAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyDeliveriesAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
