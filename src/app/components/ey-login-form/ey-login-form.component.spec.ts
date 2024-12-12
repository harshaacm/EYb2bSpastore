import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EyLoginFormComponent } from './ey-login-form.component';

describe('LoginFormComponent', () => {
  let component: EyLoginFormComponent;
  let fixture: ComponentFixture<EyLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyLoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EyLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
