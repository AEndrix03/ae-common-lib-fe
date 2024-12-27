import { InjectionToken, Type } from '@angular/core';
import { MenuItem } from 'primeng/api';

export const NAVBAR_CONFIG = new InjectionToken<NavbarConfig>('NavbarConfig');

export interface NavbarConfig {
  disabled?: boolean;
  items: MenuItem[];
  class?: string;
  startComponent?: Type<any>;
  endComponent?: Type<any>;
}
