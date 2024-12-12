import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
} from '@spartacus/core';
import { Login } from '@spartacus/core/src/auth/user-auth/store/actions/login-logout.action';
import { defaultB2bOccConfig } from '@spartacus/setup';
import { SmartEditConfig } from '@spartacus/smartedit/root';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';
import { EylayoutConfig } from '../config/layout-config';
import { environment } from '../../environment/environment';
@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(EylayoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: environment.API_BASE_URL,
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        backend: {
          loadPath: 'assets/translations/{{lng}}/{{ns}}.json',
        },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),

    provideConfig(<FeaturesConfig>{
      features: {
        level: '2211.25',
      },
    }),
    provideConfig(defaultB2bOccConfig),
  ],
})
export class SpartacusConfigurationModule {}
