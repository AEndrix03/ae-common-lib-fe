import {Injectable, Type} from '@angular/core';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private readonly dialogService: DialogService) {
  }

  public openComponent<T>(component: Type<T>, label?: '', config?: DynamicDialogConfig): DynamicDialogRef<T> {
    return this.dialogService.open(component, {
      width: '350px',
      closable: true,
      ariaLabelledBy: label || 'modal',
      modal: true,
      ...config
    });
  }


}
