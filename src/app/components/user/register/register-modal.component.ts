import {Component} from '@angular/core';
import {RegisterComponent} from "./register.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {UserModalService} from "../user-modal.service";
import {RegisterDto} from "../../../model/user.model";

@Component({
    selector: 'ae-register-modal',
    imports: [
        RegisterComponent
    ],
    template: '<ae-register (register)="register($event)" (login)="login()" (cancel)="cancel()"></ae-register>',
    providers: [DialogService]
})
export class RegisterModalComponent {

    constructor(private readonly userService: UserModalService, private readonly dialogRef: DynamicDialogRef<RegisterModalComponent>) {
    }

    register(registerDto: RegisterDto) {
        this.dialogRef.close(registerDto);
    }

    cancel() {
        this.dialogRef.close(null);
    }

    login() {
        this.cancel();
        this.userService.openLogin();
    }

}
