import {Component, EventEmitter, Output} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {Divider} from "primeng/divider";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {Message} from "primeng/message";
import {NgIf} from "@angular/common";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Tooltip} from 'primeng/tooltip';
import {emailValidator} from '../../../utils/validators';

@Component({
  selector: 'ae-reset-password-request',
  imports: [
    ButtonDirective,
    Divider,
    FloatLabel,
    InputText,
    Message,
    NgIf,
    ReactiveFormsModule,
    Tooltip,
    Button
  ],
  templateUrl: './reset-password-request.component.html'
})
export class ResetPasswordRequestComponent {
  @Output() request = new EventEmitter<string>();
  @Output() login = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  readonly usernameFc: FormControl<string>;

  constructor() {
    this.usernameFc = new FormControl('', {validators: [Validators.required, emailValidator]});
  }

  emitRequest() {
    if (this.usernameFc.valid) {
      this.request.emit(this.usernameFc.value);
    }
  }
}

