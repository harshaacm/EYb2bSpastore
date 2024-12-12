import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EySearchBoxComponent } from './ey-search-box.component';

describe('SearchboxComponent', () => {
  let component: EySearchBoxComponent;
  let fixture: ComponentFixture<EySearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EySearchBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EySearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
