import {Component, EventEmitter, Output} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {Divider} from "primeng/divider";
import {FloatLabel} from "primeng/floatlabel";
import {Message} from "primeng/message";
import {NgIf} from "@angular/common";
import {Password} from "primeng/password";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {matchValidator} from '../../../utils/validators';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'ae-change-password',
  imports: [
    ButtonDirective,
    Divider,
    FloatLabel,
    Message,
    NgIf,
    Password,
    ReactiveFormsModule,
    Tooltip,
    Button
  ],
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent {
  @Output() changePassword = new EventEmitter<string>();
  @Output() login = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  readonly fg: FormGroup<ChangePasswordForm>;

  constructor(private readonly fb: FormBuilder) {
    this.fg = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      confirm: this.fb.control('', [Validators.required])
    }, {validators: matchValidator('password', 'confirm'), updateOn: 'blur'});
  }

  get passwordFc(): FormControl<string> {
    return this.fg.get('password') as FormControl<string>;
  }

  get confirmFc(): FormControl<string> {
    return this.fg.get('confirm') as FormControl<string>;
  }

  emitChangePassword() {
    if (this.fg.valid) {
      this.changePassword.emit(this.passwordFc.value);
    }
  }
}

export interface ChangePasswordForm {
  password: FormControl<string>;
  confirm: FormControl<string>;
}
