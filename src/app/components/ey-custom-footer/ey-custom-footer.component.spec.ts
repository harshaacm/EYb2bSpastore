import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyCustomFooterComponent } from './ey-custom-footer.component';

describe('CustomFooterComponent', () => {
  let component: EyCustomFooterComponent;
  let fixture: ComponentFixture<EyCustomFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyCustomFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EyCustomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
