export * from './resource';

// AUTH TOKEN KEY
export const STORAGE_TOKEN_KEY = 'token';

export const PLACEMENT_TREE_NODE_WIDTH = 200;
export const PLACEMENT_TREE_NODE_HEIGHT = 135;
export const PLACEMENT_TREE_NODE_X_SPACE = 15;
export const PLACEMENT_TREE_NODE_Y_SPACE = 60;

export const SPONSOR_TREE_NODE_HEIGHT = 100;

export const PASSWORD_REGEXP =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:/?.>])[A-Za-z\d!@#$%^&*()\-_=+\\|[\]{};:/?.>]{8,}$/;
export const TIME_LEFT = 1200;

export const COMMISSION_TYPE = {
  PENDING: 'PENDING',
  CONFIRM: 'CONFIRM',
  BLOCK: 'BLOCK',
  NONE: 'NONE',
};

export const PAYMENT_TYPE = [
  // { label: 'CREDIT_CARD', value: 'Credit Card' },
  { label: 'ZELLE', value: 'Zelle' },
  { label: 'CASH_APP', value: 'CashApp' },
  { label: 'VENMO', value: 'Venmo' },
  { label: 'PAPER_CHECK', value: 'Paper Check' },
  { label: 'CASH', value: 'Cash' },
  { label: 'KILO_OF_SILVER', value: 'Kilo of Silver' },
  { label: 'CRYPTO', value: 'Crypto' },
];

export const CREDIT_LINKS = [
  {
    label: '949e51a5-a05e-4377-9c09-69338ed832ca',
    link: 'https://collectcheckout.com/r/uqw1x8rfiakojry6sxsj5i680mqp3m',
  },
  {
    label: '5553932b-b87d-45b0-b459-dad44582348e',
    link: 'https://collectcheckout.com/r/1l5cpwc1e7p8ec66n8twx3wx8hfey8',
  },
  {
    label: 'eb7a23db-ef66-4775-ab9c-3d7c341361b3',
    link: 'https://collectcheckout.com/r/la3pgsfa3p7wth30qb6rk8njqes6tj',
  },
  {
    label: 'e6250810-628f-4dd2-ba69-662af95f33d9',
    link: 'https://collectcheckout.com/r/k99icljxfgjkfx2qxuda5if6c20bfd',
  },
  {
    label: 'aa4043ca-a950-415a-9497-be8d6687194e',
    link: 'https://collectcheckout.com/r/9idpyduzqwbpo2n53zmjsaimvomlj8',
  },
];

export const CONTACT = [
  { label: 'INSTAGRAM', value: 'Instagram' },
  { label: 'FACEBOOK', value: 'Facebook' },
  { label: 'SNAPCHAT', value: 'Snapchat' },
  { label: 'TELEGRAM', value: 'Telegram' },
  { label: 'SMSTEXT', value: 'SMS Text' },
  { label: 'EMAIL', value: 'Email' },
  { label: 'TIKTOK', value: 'Tiktok' },
  { label: 'WHATSAPP', value: 'WhatsApp' },
  { label: 'OTHER', value: 'Other' },
];

export const LAUNCH_GROUP = 'c3bca349-972c-485b-bbd6-4241c58b815c';

export const TXC_WALLET = [
  { id: 'b3ed0e78-6cc8-465c-9454-0576534f06f2', method: 'TXC-HOT' },
  { id: '6f7681f0-9ccf-4a79-b1cb-f87e56cf7e8a', method: 'TXC-COLD' },
];

export const OTHER_WALLET = [
  // { id: '69f1351c-e7c8-4c98-9030-2f0469f86b76', method: 'ETH' },
  // { id: 'fc6302d9-7819-4cd6-a1a4-68b03286c86f', method: 'BTC' },
  // { id: 'f8717a04-6203-482a-bed0-58bfb9c6f7e0', method: 'USDT' },
  { id: '770344a4-dd50-4d03-baab-825648962a37', method: 'USDC' },
  // { id: 'ac26f196-d377-4846-8b86-7a7dda622d01', method: 'OTHER' },
];

export const PACKAGES = [
  '949e51a5-a05e-4377-9c09-69338ed832ca',
  'eb7a23db-ef66-4775-ab9c-3d7c341361b3',
  'aa4043ca-a950-415a-9497-be8d6687194e',
];

export const TARGET = [
  { label: '100, 000', value: 100000 },
  { label: '250, 000', value: 250000 },
  { label: '500, 000', value: 500000 },
  { label: '1, 000, 000', value: 1000000 },
  { label: '5, 000, 000', value: 5000000 },
];

export const NOTIFICATION_LEVEL = {
  ALL: 'All',
  ADMIN: 'Admin',
  INDIVIDUAL: 'Individual',
  TEAMLEADER: 'Team Leader',
};

export enum State {
  Approved = 'Approved',
  Draft = 'Draft',
  NeedApproval = 'NeedApproval',
  NeedRevision = 'NeedRevision',
  Printed = 'Printed',
  Voided = 'Voided',
}

export const PAYMENT_METHOD = {
  TXC: {
    label: 'Texitcoin',
    balance: 10 ** 9,
    token: null,
  },
  USDC: {
    label: 'ethereum',
    balance: 10 ** 6,
    token: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606e48',
  },
  USDT: {
    label: 'ethereum',
    balance: 10 ** 6,
    token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  },
  ETH: {
    label: 'ethereum',
    balance: 10 ** 18,
    token: null,
  },
  PYUSD: {
    label: 'ethereum',
    balance: 10 ** 6,
    token: null,
  },
};

export const CHAIN_UNIT = {
  TXC: 9,
  BNB: 18,
  ETH: 18,
  USDC: 6,
  USDT: 6,
  PYUSD: 6,
  BASE: 10,
  POLYGON: 9,
};

export const HELP_MINETXC_URL = 'https://help.minetxc.com/';
export const CASH_POTENTIAL_URL = 'https://help.minetxc.com/understanding-cash-potential/';
