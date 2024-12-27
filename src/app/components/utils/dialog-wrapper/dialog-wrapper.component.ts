import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dialog} from 'primeng/dialog';

@Component({
  selector: 'ae-dialog-wrapper',
  imports: [
    Dialog
  ],
  templateUrl: './dialog-wrapper.component.html'
})
export class DialogWrapperComponent {

  @Input() title: string;
  @Input() draggable: boolean = true;
  @Input() resizable: boolean = false;
  @Input() style: any = {width: '350px'};
  @Input() visible: boolean;

  @Output() visibilityChange = new EventEmitter<boolean>();

}
