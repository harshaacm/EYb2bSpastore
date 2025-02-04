import { UserRegistrationFacade } from '@spartacus/organization/user-registration/root';
import { Observable, of } from 'rxjs';
import { OrganizationUserRegistration } from '../model/user-registration.model';
import * as i0 from '@angular/core';

export class UserRegistrationFacadeImpl extends UserRegistrationFacade {
  static override ɵfac: i0.ɵɵFactoryDeclaration<UserRegistrationFacade, never>;
  static override ɵprov: i0.ɵɵInjectableDeclaration<UserRegistrationFacade>;
  registerUser(
    user: OrganizationUserRegistration
  ): Observable<OrganizationUserRegistration> {
    return of(user);
  }
}
