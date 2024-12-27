import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NAVBAR_CONFIG, NavbarConfig as NavbarConfig } from './navbar.config';
import { MenubarModule } from 'primeng/menubar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ae-navbar',
  imports: [MenubarModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('startComponent', { read: ViewContainerRef })
  startComponent!: ViewContainerRef;
  @ViewChild('endComponent', { read: ViewContainerRef })
  endComponent!: ViewContainerRef;

  constructor(@Inject(NAVBAR_CONFIG) public readonly config: NavbarConfig) {}

  ngAfterViewInit() {
    if (!this.config.disabled && this.config.startComponent) {
      this.startComponent.createComponent(this.config.startComponent);
    }

    if (!this.config.disabled && this.config.endComponent) {
      this.endComponent.createComponent(this.config.endComponent);
    }
  }
}
