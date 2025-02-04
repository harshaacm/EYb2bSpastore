import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  AuthConfigService,
  Country,
  GlobalMessageService,
  GlobalMessageType,
  OAuthFlow,
  Region,
  RoutingService,
  TranslationService,
  UserAddressService,
} from '@spartacus/core';
import { OrganizationUserRegistration } from '../../root/model/user-registration.model';
import { UserRegistrationFacadeImpl } from '../../root/facade/user-registration.facade';
import { CustomFormValidators } from '@spartacus/storefront';
import { Title, UserRegisterFacade } from '@spartacus/user/profile/root';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EyUserRegistrationFormService {
  private _form: FormGroup = this.buildForm();

  protected buildForm(): FormGroup {
    return this.formBuilder.group({
      titleCode: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [null, Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, CustomFormValidators.emailValidator]],
      country: this.formBuilder.group({
        isocode: [null],
      }),
      line1: [''],
      line2: [''],
      town: [''],
      region: this.formBuilder.group({
        isocode: [null],
      }),
      postalCode: [''],
      phoneNumber: [''],
      message: [''],
      dob: [null, [Validators.required, this.dobValidator.bind(this)]],
      age: [{ value: null, disabled: true }],
      qualification: [null, Validators.required],
      identityType: [null, Validators.required],
      identityNumber: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')],
      ],
      validFrom: [null],
      validTo: [null],
    });
  }

  /**
   * Public getter for the registration form.
   */
  public get form(): FormGroup {
    return this._form;
  }

  /**
   * Custom validator that ensures the user is at least 18 years old.
   */
  dobValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const today = new Date();
      const dob = new Date(control.value);
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (
        age < 18 ||
        (age === 18 && monthDiff < 0) ||
        (age === 18 && monthDiff === 0 && today.getDate() < dob.getDate())
      ) {
        return { underage: true };
      }
    }
    return null;
  }

  /**
   * Dynamically updates the validators for validFrom and validTo based on identityType.
   */
  updateIdentityTypeValidators(form: FormGroup): void {
    const identityType = form.get('identityType')?.value;
    const validFromControl = form.get('validFrom');
    const validToControl = form.get('validTo');

    if (identityType === 'Aadhar' || identityType === 'PAN') {
      validFromControl?.clearValidators();
      validToControl?.clearValidators();
    } else {
      validFromControl?.setValidators(Validators.required);
      validToControl?.setValidators(Validators.required);
    }
    validFromControl?.updateValueAndValidity();
    validToControl?.updateValueAndValidity();
  }

  /**
   * Gets all title codes.
   */
  getTitles(): Observable<Title[]> {
    return this.userRegisterFacade.getTitles();
  }

  /**
   * Gets the list of countries.
   */
  getCountries(): Observable<Country[]> {
    return this.userAddressService.getDeliveryCountries().pipe(
      tap((countries: Country[]) => {
        if (Object.keys(countries).length === 0) {
          this.userAddressService.loadDeliveryCountries();
        }
      })
    );
  }

  /**
   * Gets regions for the selected country.
   */
  getRegions(): Observable<Region[]> {
    const regions: Region[] = [];
    return (
      this.countryControl?.valueChanges.pipe(
        filter((countryIsoCode) => !!countryIsoCode),
        switchMap((countryIsoCode) => {
          this.regionControl?.reset();
          return this.userAddressService.getRegions(countryIsoCode);
        })
      ) ?? of(regions)
    );
  }

  /**
   * Gets form control for country isocode.
   */
  public get countryControl(): AbstractControl | null {
    return this.form.get('country.isocode');
  }

  /**
   * Gets form control for region isocode.
   */
  public get regionControl(): AbstractControl | null {
    return this.form.get('region.isocode');
  }

  /**
   * Builds a custom message content based on form values.
   */
  protected buildMessageContent(form: FormGroup): Observable<string> {
    return this.translationService.translate(
      'userRegistrationForm.messageToApproverTemplate',
      {
        phoneNumber: form.get('phoneNumber')?.value,
        addressLine: form.get('line1')?.value,
        secondAddressLine: form.get('line2')?.value,
        city: form.get('city')?.value,
        state: form.get('region')?.get('isocode')?.value,
        postalCode: form.get('postalCode')?.value,
        country: form.get('country')?.get('isocode')?.value,
        companyName: form.get('companyName')?.value,
        message: form.get('message')?.value,
      }
    );
  }

  /**
   * Displays a global confirmation message.
   */
  protected displayGlobalMessage(error: any): void {
    this.globalMessageService.add(
      { key: 'userRegistrationForm.successFormSubmitMessage' },
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
  }

  /**
   * Redirects the user to the login page (if using ResourceOwnerPasswordFlow).
   */
  protected redirectToLogin(): void {
    if (
      this.authConfigService.getOAuthFlow() ===
      OAuthFlow.ResourceOwnerPasswordFlow
    ) {
      this.routingService.go({ cxRoute: 'login' });
    }
  }

  /**
   * Registers a new organization user.
   */
  registerUser(form: FormGroup): Observable<OrganizationUserRegistration> {
    return this.buildMessageContent(form).pipe(
      take(1),
      switchMap((message: string) =>
        this.organizationUserRegistrationFacade.registerUser({
          titleCode: form.get('titleCode')?.value,
          firstName: form.get('firstName')?.value,
          lastName: form.get('lastName')?.value,
          email: form.get('email')?.value,
          gender: form.get('gender')?.value,
          dob: form.get('dob')?.value,
          age: form.get('age')?.value,
          qualification: form.get('qualification')?.value,
          companyName: form.get('companyName')?.value,
          isocode: form.get('isocode')?.value,
          line1: form.get('line1')?.value,
          line2: form.get('line2')?.value,
          town: form.get('town')?.value,
          postalCode: form.get('postalCode')?.value,
          phoneNumber: form.get('phoneNumber')?.value,
          identityType: form.get('identityType')?.value,
          identityNumber: form.get('identityNumber')?.value,
          validFrom: form.get('validFrom')?.value,
          validTo: form.get('validTo')?.value,
          message: message,
        })
      ),
      tap(() => {
        form.reset();
      }),
      catchError((error) => {
        this.displayGlobalMessage(error);
        throw error;
      })
    );
  }

  constructor(
    protected userRegisterFacade: UserRegisterFacade,
    protected userAddressService: UserAddressService,
    protected organizationUserRegistrationFacade: UserRegistrationFacadeImpl,
    protected translationService: TranslationService,
    public globalMessageService: GlobalMessageService,
    protected authConfigService: AuthConfigService,
    protected routingService: RoutingService,
    protected formBuilder: FormBuilder
  ) {}
}
