import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { EyCustomfooterModule } from './ey-custom-footer/ey-custom-footer.module';
import { EyCarouselModule } from './ey-carousel/ey-carousel.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
  exports: [EyCustomfooterModule, EyCarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule {}
