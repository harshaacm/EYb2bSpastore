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
import { EyCustomFooterComponent } from './ey-custom-footer.component';

@NgModule({
  declarations: [EyCustomFooterComponent],
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
        FooterNavigationComponent: {
          component: EyCustomFooterComponent,
          guards: [NotAuthGuard],
        },
      },
    } as CmsConfig),
  ],
})
export class EyCustomfooterModule {}
