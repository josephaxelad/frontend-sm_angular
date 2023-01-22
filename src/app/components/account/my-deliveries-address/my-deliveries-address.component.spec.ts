import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeliveriesAddressComponent } from './my-deliveries-address.component';

describe('MyDeliveriesAddressComponent', () => {
  let component: MyDeliveriesAddressComponent;
  let fixture: ComponentFixture<MyDeliveriesAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDeliveriesAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDeliveriesAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
