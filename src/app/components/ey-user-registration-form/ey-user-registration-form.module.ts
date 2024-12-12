import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
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
  NgSelectA11yModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { EyUserRegistrationFormComponent } from './ey-user-registration-form.component';
import { EyUserRegistrationFormService } from './ey-user-registration-form.componentservice';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    I18nModule,
    SpinnerModule,
    FormErrorsModule,
    NgSelectModule,

    NgSelectA11yModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        OrganizationUserRegistrationComponent: {
          component: EyUserRegistrationFormComponent,
          guards: [NotAuthGuard],
        },
      },
    }),
    FeaturesConfigModule,
  ],
  declarations: [EyUserRegistrationFormComponent],
  exports: [EyUserRegistrationFormComponent],
  providers: [EyUserRegistrationFormService],
})
export class UserRegistrationFormModule {}
