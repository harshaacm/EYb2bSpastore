import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxModule } from './ey-searchbox/ey-search-box.module';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { EySuccessPageModule } from '../../feature-libs/organization/ey-user-registration/components/form/ey-success-page/ey-success-page.module';
import { EyCustomfooterModule } from './ey-custom-footer/ey-custom-footer.module';
import { EyCarouselModule } from './ey-carousel/ey-carousel.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchBoxModule,
    EySuccessPageModule,
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
  exports: [
    SearchBoxModule,
    EyCustomfooterModule,
    EySuccessPageModule,
    EyCarouselModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule {}
