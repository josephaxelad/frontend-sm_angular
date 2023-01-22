import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyDeleveriesAddressComponent } from './all-my-deleveries-address.component';

describe('AllMyDeleveriesAddressComponent', () => {
  let component: AllMyDeleveriesAddressComponent;
  let fixture: ComponentFixture<AllMyDeleveriesAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMyDeleveriesAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyDeleveriesAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
