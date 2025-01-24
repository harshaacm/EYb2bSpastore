import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlModule, I18nModule } from '@spartacus/core';
import { EySuccessPageComponent } from './ey-success-page.component';

@NgModule({
  declarations: [EySuccessPageComponent],
  imports: [CommonModule, UrlModule, I18nModule],
})
export class EySuccessPageModule {}
