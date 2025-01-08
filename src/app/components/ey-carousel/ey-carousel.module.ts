import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  UrlModule,
  I18nModule,
  FeaturesConfigModule,
  ConfigModule,
  NotAuthGuard,
  CmsConfig,
} from '@spartacus/core';
import {
  FormErrorsModule,
  SpinnerModule,
  PasswordVisibilityToggleModule,
} from '@spartacus/storefront';
import { EyCarouselComponent } from './ey-carousel.component';

@NgModule({
  declarations: [EyCarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    FormErrorsModule,
    SpinnerModule,
    PasswordVisibilityToggleModule,
    FeaturesConfigModule,
    ConfigModule.withConfig({
      cmsComponents: {
        cmsitem_00000001: {
          component: EyCarouselComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class EyCarouselModule {}
