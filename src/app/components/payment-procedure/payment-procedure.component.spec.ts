import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProcedureComponent } from './payment-procedure.component';

describe('PaymentProcedureComponent', () => {
  let component: PaymentProcedureComponent;
  let fixture: ComponentFixture<PaymentProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
