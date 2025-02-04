import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  Country,
  GlobalMessageService,
  GlobalMessageType,
  Region,
} from '@spartacus/core';
import { Title } from '@spartacus/user/profile/root';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { EyUserRegistrationFormService } from './ey-user-registration-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cx-user-registration-form',
  templateUrl: './ey-user-registration-form.component.html',
  styleUrls: ['./ey-user-registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyUserRegistrationFormComponent implements OnDestroy {
  titles$: Observable<Title[]> = this.EyUserRegistrationFormService.getTitles();
  countries$: Observable<Country[]> =
    this.EyUserRegistrationFormService.getCountries();
  regions$: Observable<Region[]> =
    this.EyUserRegistrationFormService.getRegions();

  registerForm: FormGroup = this.EyUserRegistrationFormService.form;
  isLoading$ = new BehaviorSubject(false);
  protected subscriptions = new Subscription();
  protected globalMessageService =
    this.EyUserRegistrationFormService.globalMessageService;

  maxDate!: string;
  maxValidFromDate!: string;
  minValidToDate!: string;
  maxValidToDate!: string;
  showDatePickers = false;

  genders = [
    { name: 'Male', code: 'Male' },
    { name: 'Female', code: 'Female' },
    { name: 'Other', code: 'Other' },
  ];

  qualification = [
    { name: 'MASTERS', code: 'MASTERS' },
    { name: 'GRADUATE', code: 'GRADUATE' },
    { name: 'INTERMEDIATE', code: 'INTERMEDIATE' },
    { name: 'MATRICULATION', code: 'MATRICULATION' },
  ];

  identityConfig = {
    options: [
      { value: 'Aadhar', label: 'Aadhar' },
      { value: 'PAN', label: 'PAN' },
      { value: 'Driving_License', label: 'Driving License' },
      { value: 'Passport', label: 'Passport' },
    ],
  };

  constructor(
    protected EyUserRegistrationFormService: EyUserRegistrationFormService,
    private router: Router
  ) {
    this.setMaxDateForDOB();
    this.setDateConstraints();
    this.calculateAge();
  }

  /**
   * Calculates the age based on the DOB control and updates the age field.
   */
  protected calculateAge(): void {
    const dobControl = this.registerForm.get('dob');
    const ageControl = this.registerForm.get('age');
    this.subscriptions.add(
      dobControl?.valueChanges.subscribe((dobValue: string) => {
        if (dobValue) {
          const dob = new Date(dobValue);
          const today = new Date();
          let age = today.getFullYear() - dob.getFullYear();
          const monthDiff = today.getMonth() - dob.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < dob.getDate())
          ) {
            age--;
          }
          ageControl?.setValue(age >= 18 ? age : null);
        } else {
          ageControl?.setValue(null);
        }
      })
    );
  }

  /**
   * Called when the identity type changes.
   * Delegates the updating of validators to the service.
   */
  onIdentityTypeChange(): void {
    this.EyUserRegistrationFormService.updateIdentityTypeValidators(
      this.registerForm
    );
    const identityType = this.registerForm.get('identityType')?.value;
    this.showDatePickers = !(
      identityType === 'Aadhar' || identityType === 'PAN'
    );
  }

  /**
   * Handles form submission.
   */
  submit(): void {
    if (this.registerForm.valid) {
      this.isLoading$.next(true);
      this.subscriptions.add(
        this.EyUserRegistrationFormService.registerUser(
          this.registerForm
        ).subscribe({
          complete: () => {
            this.isLoading$.next(false);
          },
          next: () => {
            this.router.navigate(['/ey-registration-success']);
          },
          error: () => {
            this.isLoading$.next(false);
            this.globalMessageService?.add(
              { key: 'userRegistrationForm.messageToFailedToRegister' },
              GlobalMessageType.MSG_TYPE_ERROR
            );
          },
        })
      );
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  /**
   * Sets the maximum date for DOB (today minus 18 years).
   */
  protected setMaxDateForDOB(): void {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    this.maxDate = today.toISOString().split('T')[0];
  }

  /**
   * Sets constraints for validFrom and validTo date pickers.
   */
  private setDateConstraints(): void {
    const currentDate = new Date();
    const maxValidFrom = new Date();
    maxValidFrom.setFullYear(currentDate.getFullYear() - 10);

    const maxValidTo = new Date();
    maxValidTo.setFullYear(currentDate.getFullYear() + 10);
    const minValidTo = new Date();

    this.maxValidFromDate = this.formatDate(maxValidFrom);
    this.minValidToDate = this.formatDate(minValidTo);
    this.maxValidToDate = this.formatDate(maxValidTo);
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
