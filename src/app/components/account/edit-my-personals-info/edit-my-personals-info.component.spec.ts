import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyPersonalsInfoComponent } from './edit-my-personals-info.component';

describe('EditMyPersonalsInfoComponent', () => {
  let component: EditMyPersonalsInfoComponent;
  let fixture: ComponentFixture<EditMyPersonalsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyPersonalsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyPersonalsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
