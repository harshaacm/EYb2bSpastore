import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrl: './custom-footer.component.scss',
})
export class CustomFooterComponent implements OnInit {
  year!: number;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
