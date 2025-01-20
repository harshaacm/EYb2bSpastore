import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginFormComponentService } from '@spartacus/user/account/components';

@Component({
  selector: 'cx-login-form',
  templateUrl: './ey-login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ey-login-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EyLoginFormComponent {
  constructor(protected service: LoginFormComponentService) {}

  form: UntypedFormGroup = this.service.form;
  isUpdating$: Observable<boolean> = this.service.isUpdating$;

  @HostBinding('class.user-form') style = true;

  onSubmit(): void {
    this.service.login();
  }
}
