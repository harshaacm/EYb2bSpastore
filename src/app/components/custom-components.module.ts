import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { EyCustomfooterModule } from './ey-custom-footer/ey-custom-footer.module';
import { EyCarouselModule } from './ey-carousel/ey-carousel.module';
import { SearchBoxModule } from './ey-searchbox/ey-search-box.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchBoxModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AnonymousConsentOpenDialogComponent: {
          component: {},
        },
        NoticeTextParagraph: {
          component: {},
        },
        CMSParagraphComponent: {
          component: {},
        },
      },
    } as CmsConfig),
  ],
  exports: [SearchBoxModule, EyCustomfooterModule, EyCarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule {}
