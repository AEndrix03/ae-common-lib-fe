import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _visibility = new BehaviorSubject<boolean>(true);
  public visibility$ = this._visibility.asObservable();

  public show() {
    this._visibility.next(true);
  }

  public hide() {
    this._visibility.next(false);
  }

  public toggle() {
    this.visibility$
      .pipe(
        map((value) => !value),
        tap((value) => this._visibility.next(value))
      )
      .subscribe();
  }
}
