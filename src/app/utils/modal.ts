import {signal, WritableSignal} from '@angular/core';

export abstract class Modal {

  public title: string;
  public draggable: boolean = true;
  public resizable: boolean = false;
  public readonly visible: WritableSignal<boolean> = signal(false);
  
  constructor(title?: string, draggable?: boolean, resizable?: boolean) {
    this.title = title;
    this.draggable = draggable;
    this.resizable = resizable;
  }

  public open(): void {
    this.visible.set(true);
  }

  public close(): void {
    this.visible.set(false);
  }

}
