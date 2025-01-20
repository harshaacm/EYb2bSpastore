import { NgModule } from '@angular/core';
import { UserAccountCoreModule } from '@spartacus/user/account/core';
import { UserAccountOccModule } from '@spartacus/user/account/occ';
import { UserAccountComponentsModule } from './components/user-account-component.module';

@NgModule({
  imports: [
    UserAccountCoreModule,
    UserAccountOccModule,
    UserAccountComponentsModule,
  ],
})
export class UserAccountModule {}
