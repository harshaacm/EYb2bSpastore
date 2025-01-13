import { NgModule } from '@angular/core';
import { EyUserRegistrationComponentsModule } from './components/ey-user-registration-components.module';
import { UserRegistrationCoreModule } from '@spartacus/organization/user-registration/core';
import { UserRegistrationOccModule } from '@spartacus/organization/user-registration/occ';

@NgModule({
  imports: [
    UserRegistrationCoreModule.forRoot(),
    EyUserRegistrationComponentsModule,
    UserRegistrationOccModule,
  ],
})
export class EyOrganizationUserRegistrationModule {}
