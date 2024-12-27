import {Component} from '@angular/core';
import {ChangePasswordComponent} from './change-password.component';
import {UserModalService} from '../user-modal.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'ae-change-password-modal',
  imports: [
    ChangePasswordComponent
  ],
  template: '<ae-change-password (changePassword)="changePassword($event)" (cancel)="cancel()" (login)="login()"></ae-change-password>',
  providers: [DialogService]
})
export class ChangePasswordModalComponent {

  constructor(private readonly userService: UserModalService, private readonly dialogRef: DynamicDialogRef<ChangePasswordModalComponent>) {
  }

  changePassword(password: string) {
    this.dialogRef.close(password);
  }

  cancel() {
    this.dialogRef.close(null);
  }

  login() {
    this.cancel();
    this.userService.openLogin();
  }


}
