import { NgModule } from '@angular/core';
import { CDCUserAccountModule } from '@spartacus/cdc/user-account';
import { UserAccountModule } from '../../../feature-libs/user/account/user-account.module';

@NgModule({
  declarations: [],
  imports: [UserAccountModule, CDCUserAccountModule],
})
export class UserAccountWrapperModule {}
