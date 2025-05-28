
// ----------------------------------------------------------------------

export type ConfigValue = {
  APP_NAME: string;
  ASSET_DIR: string;

  WS_PATH: string;
  SERVER_HOST: string;
  ASSET_URL: string;
  STORAGE_TOKEN_KEY: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  APP_NAME: import.meta.env.VITE_APP_NAME ?? '',
  ASSET_DIR: import.meta.env.VITE_ASSET_DIR ?? '',

  WS_PATH: import.meta.env.VITE_WS_PATH ?? '',
  SERVER_HOST: import.meta.env.VITE_SERVER_HOST ?? '',
  ASSET_URL: import.meta.env.VITE_ASSET_URL ?? '',

  STORAGE_TOKEN_KEY: 'token',
};
