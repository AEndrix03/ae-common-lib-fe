import { InjectionToken, Type } from '@angular/core';
import { MenuItem } from 'primeng/api';

export const SIDEBAR_CONFIG = new InjectionToken<SidebarConfig>(
  'SidebarConfig'
);

export interface SidebarConfig {
  disabled?: boolean;
  items: MenuItem[];
  class?: string;
  startComponent?: Type<any>;
  endComponent?: Type<any>;
}
