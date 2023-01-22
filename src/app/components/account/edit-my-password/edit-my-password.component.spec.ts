import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyPasswordComponent } from './edit-my-password.component';

describe('EditMyPasswordComponent', () => {
  let component: EditMyPasswordComponent;
  let fixture: ComponentFixture<EditMyPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
