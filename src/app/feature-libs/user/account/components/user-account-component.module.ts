import { NgModule } from '@angular/core';
import { LoginFormModule } from './ey-login-form/ey-login-form.module';
import { LoginRegisterModule } from '@spartacus/user/account/components';
import { LoginModule } from '@spartacus/user/account/components';
import { MyAccountV2UserModule } from '@spartacus/user/account/components';
import { OneTimePasswordLoginFormModeule } from '@spartacus/user/account/components';
import { VerificationTokenFormModule } from '@spartacus/user/account/components';

@NgModule({
  imports: [
    LoginModule,
    LoginFormModule,
    VerificationTokenFormModule,
    LoginRegisterModule,
    MyAccountV2UserModule,
    OneTimePasswordLoginFormModeule,
  ],
})
export class UserAccountComponentsModule {}
