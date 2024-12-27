import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {Password} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {Divider} from 'primeng/divider';
import {LoginDto} from '../../../model/user.model';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Tooltip} from 'primeng/tooltip';
import {Message} from 'primeng/message';
import {NgIf} from '@angular/common';
import {emailValidator} from '../../../utils/validators';

@Component({
  selector: 'ae-login',
  imports: [ButtonModule, FloatLabel, Password, InputTextModule, Divider, ReactiveFormsModule, Tooltip, Message, NgIf],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  @Output() login = new EventEmitter<LoginDto>();
  @Output() forgottenPassword = new EventEmitter<void>();
  @Output() register = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  readonly fg: FormGroup<LoginForm>;

  constructor(private readonly fb: FormBuilder) {
    this.fg = this.fb.group({
      username: this.fb.control('', [Validators.required, emailValidator]),
      password: this.fb.control('', [Validators.required])
    }, {updateOn: 'blur'});
  }

  get usernameFc(): FormControl<string> {
    return this.fg.get('username') as FormControl<string>;
  }

  get passwordFc(): FormControl<string> {
    return this.fg.get('password') as FormControl<string>;
  }

  emitLogin() {
    if (this.fg.valid) {
      this.login.emit(this.fg.value as LoginDto);
    }
  }
}

export interface LoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
}


