import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyCarouselComponent } from './ey-carousel.component';

describe('CarouselComponent', () => {
  let component: EyCarouselComponent;
  let fixture: ComponentFixture<EyCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EyCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
