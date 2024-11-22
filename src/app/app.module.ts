import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule, PageTitleComponent } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { SearchBoxModule } from './searchbox/search-box.module';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  declarations: [AppComponent, CarouselComponent],
  imports: [
    BrowserModule,
    SearchBoxModule,
    LoginFormModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    SpartacusModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideHttpClient(withFetch(), withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
