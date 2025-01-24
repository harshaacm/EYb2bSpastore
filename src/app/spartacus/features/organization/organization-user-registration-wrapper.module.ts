import { NgModule } from '@angular/core';
import { CDCB2BRegisterModule } from '@spartacus/cdc/organization/user-registration';
import { EyOrganizationUserRegistrationModule } from '../../../feature-libs/organization/ey-user-registration/ey-user-registration.module';

@NgModule({
  declarations: [],
  imports: [EyOrganizationUserRegistrationModule, CDCB2BRegisterModule],
})
export class OrganizationUserRegistrationWrapperModule {}
