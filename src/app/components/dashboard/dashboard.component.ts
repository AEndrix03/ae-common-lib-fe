import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { SIDEBAR_CONFIG, SidebarConfig } from '../sidebar/sidebar.config';
import { NAVBAR_CONFIG, NavbarConfig } from '../navbar/navbar.config';

export const navbarConfig: NavbarConfig = {
  items: [
    {
      label: 'File',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [{ label: 'Project' }, { label: 'Other' }],
        },
        { label: 'Open' },
        { label: 'Quit' },
      ],
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
      ],
    },
  ],
};

export const sidebarConfig: SidebarConfig = {
  items: [
    {
      label: 'File',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [{ label: 'Project' }, { label: 'Other' }],
        },
        { label: 'Open' },
        { label: 'Quit' },
      ],
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
      ],
    },
  ],
};

@Component({
  selector: 'ae-dashboard',
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [
    { provide: NAVBAR_CONFIG, useValue: navbarConfig },
    { provide: SIDEBAR_CONFIG, useValue: sidebarConfig },
  ],
})
export class DashboardComponent {}
