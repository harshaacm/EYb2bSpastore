import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './ey-carousel.component.html',
  styleUrls: ['./ey-carousel.component.scss'],
})
export class EyCarouselComponent {
  @Input() items: any[] = [];
  currentIndex = 0;
  slidesToShow = 4;

  get visibleSlides() {
    return this.items.slice(
      this.currentIndex,
      this.currentIndex + this.slidesToShow
    );
  }

  next() {
    if (this.currentIndex < this.items.length - this.slidesToShow) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.items.length - this.slidesToShow;
    }
  }
}