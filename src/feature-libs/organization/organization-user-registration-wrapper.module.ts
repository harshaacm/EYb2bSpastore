import { NgModule, Type } from '@angular/core';
import { CDCB2BRegisterModule } from '@spartacus/cdc/organization/user-registration';
import { EyOrganizationUserRegistrationModule } from './ey-user-registration/user-registration.module';

const extensions: Type<any>[] = [];

extensions.push(CDCB2BRegisterModule);

@NgModule({
  imports: [EyOrganizationUserRegistrationModule, ...extensions],
})
export class OrganizationUserRegistrationWrapperModule {}
