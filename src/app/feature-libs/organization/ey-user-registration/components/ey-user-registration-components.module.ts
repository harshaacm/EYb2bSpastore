import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EyUserRegistrationFormModule } from './form/ey-user-registration-form.module';

@NgModule({
  imports: [RouterModule, EyUserRegistrationFormModule],
})
export class EyUserRegistrationComponentsModule {}
