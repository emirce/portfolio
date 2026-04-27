import { ui, type UiKey } from './ui';

export type { UiKey };

export function t(key: UiKey): string {
  return ui[key];
}
