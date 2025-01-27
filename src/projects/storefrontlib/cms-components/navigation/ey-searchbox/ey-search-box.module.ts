import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
  provideDefaultConfig,
} from '@spartacus/core';
import { EySearchBoxComponent } from './ey-search-box.component';
import { IconModule, MediaModule, OutletModule } from '@spartacus/storefront';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    IconModule,
    UrlModule,
    I18nModule,
    OutletModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SearchBoxComponent: {
          component: EySearchBoxComponent,
        },
      },
    }),
  ],
  declarations: [EySearchBoxComponent, HighlightPipe],
  exports: [EySearchBoxComponent, HighlightPipe],
})
export class SearchBoxModule {}
