import { use } from 'react';

import { SettingsContext } from './SettingsContext';

// ----------------------------------------------------------------------

export function useSettingsContext() {
  const context = use(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
}
