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
import { EySuccessPageComponent } from './ey-success-page.component';

@NgModule({
  declarations: [],
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
        EySuccessPageComponent: {
          component: EySuccessPageComponent,
          guards: [NotAuthGuard],
        },
      },
    } as CmsConfig),
  ],
  //declarations: [EySuccessPageComponent],
})
export class EySuccessPageModule {}
