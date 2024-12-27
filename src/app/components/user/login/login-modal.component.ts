import {Component} from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {LoginComponent} from "./login.component";
import {UserModalService} from "../user-modal.service";
import {LoginDto} from "../../../model/user.model";

@Component({
    selector: 'ae-login-modal',
    imports: [
        LoginComponent
    ],
    template: '<ae-login (login)="login($event)" (register)="register()" (forgottenPassword)="forgottenPassword()" (cancel)="cancel()"></ae-login>',
    providers: [DialogService]
})
export class LoginModalComponent {

    constructor(private readonly userService: UserModalService, private readonly dialogRef: DynamicDialogRef<LoginModalComponent>) {
    }

    login(loginDto: LoginDto) {
        this.dialogRef.close(loginDto);
    }

    forgottenPassword() {
        this.cancel();
        this.userService.openResetPasswordRequest();
    }

    cancel() {
        this.dialogRef.close(null);
    }

    register() {
        this.cancel();
        this.userService.openRegister();
    }

}
