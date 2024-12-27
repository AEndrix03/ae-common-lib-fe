import {Component} from '@angular/core';
import {ResetPasswordRequestComponent} from "./reset-password-request.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {UserModalService} from "../user-modal.service";

@Component({
    selector: 'ae-reset-password-request-modal',
    imports: [
        ResetPasswordRequestComponent
    ],
    template: '<ae-reset-password-request (request)="request($event)" (cancel)="cancel()" (login)="login()"></ae-reset-password-request>',
    providers: [DialogService]
})
export class ResetPasswordRequestModalComponent {

    constructor(private readonly userService: UserModalService, private readonly dialogRef: DynamicDialogRef<ResetPasswordRequestModalComponent>) {
    }

    request(username: string) {
        this.dialogRef.close(username);
    }

    cancel() {
        this.dialogRef.close(null);
    }

    login() {
        this.cancel();
        this.userService.openLogin();
    }

}
