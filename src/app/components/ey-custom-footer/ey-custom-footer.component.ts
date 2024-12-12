import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './ey-custom-footer.component.html',
  styleUrl: './ey-custom-footer.component.scss',
})
export class EyCustomFooterComponent implements OnInit {
  year!: number;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
