import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxModule } from './ey-searchbox/ey-search-box.module';
import { LoginFormModule } from './ey-login-form/ey-login-form.module';
import { EyCustomFooterComponent } from './ey-custom-footer/ey-custom-footer.component';
import { EyCarouselComponent } from './ey-carousel/ey-carousel.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { UserRegistrationFormModule } from './ey-user-registration-form/ey-user-registration-form.module';
import { EySuccessPageComponent } from './ey-success-page/ey-success-page.component';
import { EySuccessPageModule } from './ey-success-page/ey-success-page.module';

@NgModule({
  declarations: [
    EyCustomFooterComponent,
    EyCarouselComponent,
    EySuccessPageComponent,
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    EySuccessPageModule,
    LoginFormModule,
    UserRegistrationFormModule,
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
        FooterNavigationComponent: {
          component: EyCustomFooterComponent,
        },
        cmsitem_00000001: {
          component: EyCarouselComponent,
        },
      },
    } as CmsConfig),
  ],
  exports: [
    SearchBoxModule,
    LoginFormModule,
    EyCustomFooterComponent,
    EySuccessPageModule,
    EyCarouselComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule {}
