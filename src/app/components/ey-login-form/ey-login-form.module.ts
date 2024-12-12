import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  NotAuthGuard,
  UrlModule,
} from '@spartacus/core';
import {
  FormErrorsModule,
  PasswordVisibilityToggleModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { LoginFormComponentService } from '@spartacus/user/account/components';
import { EyLoginFormComponent } from './ey-login-form.component';
import { RegisterComponent } from '@spartacus/user/profile/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    I18nModule,
    FormErrorsModule,
    SpinnerModule,
    PasswordVisibilityToggleModule,
    FeaturesConfigModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ReturningCustomerLoginComponent: {
          component: EyLoginFormComponent,
          guards: [NotAuthGuard],
        },
      },
    } as CmsConfig),
  ],
  providers: [LoginFormComponentService],
  declarations: [EyLoginFormComponent],
})
export class LoginFormModule {}
