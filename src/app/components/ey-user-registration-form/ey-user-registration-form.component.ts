import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  Country,
  GlobalMessageService,
  GlobalMessageType,
  Region,
} from '@spartacus/core';
import { Title } from '@spartacus/user/profile/root';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { EyUserRegistrationFormService } from './ey-user-registration-form.componentservice';

@Component({
  selector: 'cx-user-registration-form',
  templateUrl: './Ey-user-registration-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyUserRegistrationFormComponent implements OnDestroy {
  titles$: Observable<Title[]> = this.EyuserRegistrationFormService.getTitles();

  countries$: Observable<Country[]> =
    this.EyuserRegistrationFormService.getCountries();

  regions$: Observable<Region[]> =
    this.EyuserRegistrationFormService.getRegions();

  registerForm: FormGroup;

  isLoading$ = new BehaviorSubject(false);

  protected subscriptions = new Subscription();

  protected globalMessageService = inject(GlobalMessageService, {
    optional: true,
  });

  maxDate!: string;

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

  constructor(
    protected EyuserRegistrationFormService: EyUserRegistrationFormService,
    protected fb: FormBuilder
  ) {
    this.registerForm = this.createForm();
    this.setMaxDateForDOB();
    this.calculateAge();
  }

  /**
   * Initializes the registration form with required fields and validations.
   */
  protected createForm(): FormGroup {
    return this.fb.group({
      titleCode: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: this.fb.group({
        isocode: [null],
      }),
      line1: [''],
      line2: [''],
      town: [''],
      postalCode: [''],
      region: this.fb.group({
        isocode: [null],
      }),
      phoneNumber: [''],
      message: [''],
      // New Fields
      gender: [null, Validators.required],
      dob: [null, [Validators.required, this.dobValidator]],
      age: [{ value: null, disabled: true }],
      qualification: [null, Validators.required],
    });
  }

  /**
   * Validates the DOB to ensure the user is at least 18 years old.
   */
  protected dobValidator(control: any): { [key: string]: boolean } | null {
    if (control.value) {
      const today = new Date();
      const dob = new Date(control.value);
      const age = today.getFullYear() - dob.getFullYear();
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
   * Sets the max date for the DOB field to today's date minus 18 years.
   */
  protected setMaxDateForDOB(): void {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    this.maxDate = today.toISOString().split('T')[0]; // Format YYYY-MM-DD
  }

  /**
   * Updates the age field whenever the DOB field changes.
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
   * Handles the form submission.
   */
  submit(): void {
    if (this.registerForm.valid) {
      this.isLoading$.next(true);
      this.subscriptions.add(
        this.EyuserRegistrationFormService.registerUser(
          this.registerForm
        ).subscribe({
          complete: () => this.isLoading$.next(false),
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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
