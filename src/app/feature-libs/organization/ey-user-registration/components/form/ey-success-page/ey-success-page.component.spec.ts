import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EySuccessPageComponent } from './ey-success-page.component';

describe('EySuccessPageComponent', () => {
  let component: EySuccessPageComponent;
  let fixture: ComponentFixture<EySuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EySuccessPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EySuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
