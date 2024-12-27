import {Injectable, Type} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {LoginModalComponent} from './login/login-modal.component';
import {catchError, filter, Observable} from 'rxjs';
import {LoginDto, RegisterDto} from '../../model/user.model';
import {RegisterModalComponent} from './register/register-modal.component';
import {ResetPasswordRequestModalComponent} from './reset-password-request/reset-password-request-modal.component';
import {ChangePasswordModalComponent} from './change-password/change-password-modal.component';

@Injectable({
  providedIn: 'root',
})
export class UserModalService {

  constructor(private readonly alert: AlertService) {
  }

  public openLogin() {
    this.openLogin$().subscribe();
  }

  public openRegister() {
    this.openRegister$().subscribe();
  }

  public openResetPasswordRequest() {
    this.openResetPasswordRequest$().subscribe();
  }

  public openChangePassword() {
    this.openChangePassword$().subscribe();
  }

  public openLogin$(): Observable<LoginDto> {
    return this.openModal$<LoginDto>(LoginModalComponent);
  }

  public openRegister$(): Observable<RegisterDto> {
    return this.openModal$<RegisterDto>(RegisterModalComponent);
  }

  public openResetPasswordRequest$(): Observable<string> {
    return this.openModal$<string>(ResetPasswordRequestModalComponent);
  }

  public openChangePassword$(): Observable<string> {
    return this.openModal$<string>(ChangePasswordModalComponent);
  }

  private openModal$<T>(component: Type<any>): Observable<T> {
    return this.alert.openComponent(component, '', {width: '', closable: false}).onClose.pipe(
      catchError(() => null),
      filter(res => !!res)
    );
  }

}
