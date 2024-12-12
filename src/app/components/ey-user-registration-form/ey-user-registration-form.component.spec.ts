import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyUserRegistrationFormComponent } from './ey-user-registration-form.component';

describe('UserRegistrationFormComponent', () => {
  let component: EyUserRegistrationFormComponent;
  let fixture: ComponentFixture<EyUserRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyUserRegistrationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EyUserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
