import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxModule } from './ey-searchbox/ey-search-box.module';
import { LoginFormModule } from './ey-login-form/ey-login-form.module';
import { CustomFooterComponent } from './ey-custom-footer/ey-custom-footer.component';
import { CarouselComponent } from './ey-carousel/ey-carousel.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { UserRegistrationFormModule } from './ey-user-registration-form/ey-user-registration-form.module';

@NgModule({
  declarations: [CustomFooterComponent, CarouselComponent],
  imports: [
    CommonModule,
    SearchBoxModule,
    LoginFormModule,
    UserRegistrationFormModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AnonymousConsentManagementBannerComponent: {
          component: {},
        },
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
          component: CustomFooterComponent,
        },
        cmsitem_00000001: {
          component: CarouselComponent,
        },
        PageTitleComponent: {
          component: {},
        },
      },
    } as CmsConfig),
  ],
  exports: [
    SearchBoxModule,
    LoginFormModule,
    CustomFooterComponent,
    CarouselComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomComponentsModule {}
