import {Component, EventEmitter, Output} from '@angular/core';
import {Button, ButtonDirective} from 'primeng/button';
import {Divider} from 'primeng/divider';
import {FloatLabel} from 'primeng/floatlabel';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Message} from 'primeng/message';
import {Password} from 'primeng/password';
import {RegisterDto} from '../../../model/user.model';
import {emailValidator, matchValidator} from '../../../utils/validators';
import {Tooltip} from 'primeng/tooltip';
import {NgIf} from '@angular/common';

@Component({
  selector: 'ae-register',
  imports: [
    ButtonDirective,
    Divider,
    FloatLabel,
    FormsModule,
    InputText,
    Message,
    Password,
    ReactiveFormsModule,
    Tooltip,
    NgIf,
    Button
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  @Output() register = new EventEmitter<RegisterDto>();
  @Output() login = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  readonly fg: FormGroup<RegisterForm>;

  constructor(private readonly fb: FormBuilder) {
    this.fg = this.fb.group({
      username: this.fb.control('', [Validators.required, emailValidator]),
      passwordGroup: this.fb.group({
        password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
        confirm: this.fb.control('', [Validators.required])
      }, {validators: matchValidator('password', 'confirm'), updateOn: 'blur'})
    }, {updateOn: 'blur'});
  }

  get usernameFc(): FormControl<string> {
    return this.fg.get('username') as FormControl<string>;
  }

  get passwordFc(): FormControl<string> {
    return this.fg.get('passwordGroup').get('password') as FormControl<string>;
  }

  get confirmFc(): FormControl<string> {
    return this.fg.get('passwordGroup').get('confirm') as FormControl<string>;
  }

  emitRegister() {
    if (this.fg.valid) {
      this.register.emit({
        username: this.usernameFc.value,
        password: this.passwordFc.value
      });
    }
  }
}

export interface RegisterForm {
  username: FormControl<string>;
  passwordGroup: FormGroup<{
    password: FormControl<string>;
    confirm: FormControl<string>;
  }>;
}

