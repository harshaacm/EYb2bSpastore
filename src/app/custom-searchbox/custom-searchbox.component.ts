import { Component, HostListener } from '@angular/core';
import { SearchBoxComponent } from '@spartacus/storefront';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-custom-searchbox',
  templateUrl: './custom-searchbox.component.html',
  styleUrl: './custom-searchbox.component.scss',
})
export class CustomSearchboxComponent {
  customPlaceholder = 'Search Custom Products';

  onSearch(event: any) {
    const query = event.target.value;
  }
}
