import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {UserModalService} from './components/user/user-modal.service';

@Component({
  selector: 'ae-root',
  imports: [ButtonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ae-common-lib';

  constructor(private readonly userService: UserModalService) {
  }

  open() {
    this.userService.openLogin();
  }
}


