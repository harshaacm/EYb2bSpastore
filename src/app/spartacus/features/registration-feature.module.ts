import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';
import {
  OrganizationUserRegistrationRootModule,
  ORGANIZATION_USER_REGISTRATION_FEATURE,
} from '@spartacus/organization/user-registration/root';
import {
  organizationUserRegistrationTranslationChunksConfig,
  organizationUserRegistrationTranslations,
} from '../../../feature-libs/organization/ey-user-registration/assets/translations/translations/translations';

@NgModule({
  imports: [OrganizationUserRegistrationRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [ORGANIZATION_USER_REGISTRATION_FEATURE]: {
          module: () =>
            import(
              './organization/organization-user-registration-wrapper.module'
            ).then((m) => m.OrganizationUserRegistrationWrapperModule),
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: organizationUserRegistrationTranslations,
        chunks: organizationUserRegistrationTranslationChunksConfig,
      },
    }),
  ],
})
export class OrganizationUserRegistrationFeatureModule {}
