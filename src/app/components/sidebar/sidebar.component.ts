import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SIDEBAR_CONFIG, SidebarConfig } from './sidebar.config';
import { SidebarService } from './sidebar.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ae-sidebar',
  imports: [MenuModule, NgIf, AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('startComponent', { read: ViewContainerRef })
  startComponent!: ViewContainerRef;
  @ViewChild('endComponent', { read: ViewContainerRef })
  endComponent!: ViewContainerRef;

  showed$: Observable<boolean> = of(true);

  constructor(
    @Inject(SIDEBAR_CONFIG) public readonly config: SidebarConfig,
    public readonly sidebarService: SidebarService
  ) {
    this.showed$ = this.sidebarService.visibility$;
  }

  ngAfterViewInit(): void {
    if (!this.config.disabled && this.config.startComponent) {
      this.startComponent.createComponent(this.config.startComponent);
    }

    if (!this.config.disabled && this.config.endComponent) {
      this.endComponent.createComponent(this.config.endComponent);
    }
  }
}
