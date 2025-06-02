import type { AccountDrawerProps } from './components/AccountDrawer';

import { CONFIG } from 'src/config';

import { Iconify } from 'src/components/Iconify';
import { SvgColor } from 'src/components/SvgColor';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.ASSET_DIR}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  admin: icon('ic_admin'),
  analytics: icon('ic_analytics'),
  banking: icon('ic_banking'),
  blog: icon('ic_blog'),
  blank: icon('ic_blank'),
  booking: icon('ic_booking'),
  calendar: icon('ic_calendar'),
  calculator: icon('ic_calculator'),
  chat: icon('ic_chat'),
  commission: icon('ic_commission'),
  dashboard: icon('ic_dashboard'),
  diagram: icon('ic_diagram'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  ecommerce: icon('ic_ecommerce'),
  file: icon('ic_file'),
  folder: icon('ic_folder'),
  invoice: icon('ic_invoice'),
  job: icon('ic_job'),
  kanban: icon('ic_kanban'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  mail: icon('ic_mail'),
  menuItem: icon('ic_menu_item'),
  order: icon('ic_order'),
  sponsor: icon('ic_sponsor'),
  product: icon('ic_product'),
  package: icon('ic_package'),
  reward: icon('ic_reward'),
  sale: icon('ic_sale'),
  send: icon('ic_send'),
  school: icon('ic_school'),
  tour: icon('ic_tour'),
  team: icon('ic_team'),
  user: icon('ic_user'),
};

// ----------------------------------------------------------------------

export const accountNavData: AccountDrawerProps['data'] = [
  {
    label: 'Overview',
    href: '/overview',
    icon: ICONS.analytics,
  },
  {
    label: 'Orders',
    href: '/orders',
    icon: ICONS.sale,
  },
  {
    label: 'Sponsorships',
    href: '/sponsorships',
    icon: ICONS.sponsor,
  },
  {
    label: 'Placement',
    href: '/placement',
    icon: ICONS.diagram,
  },
  {
    label: 'Commission',
    href: '/commission',
    icon: ICONS.commission,
  },
  {
    label: 'Resource',
    href: '/resource',
    icon: <Iconify icon="lucide:folder-open" />,
  },
  {
    label: 'Reward',
    href: '/reward',
    icon: <Iconify icon="marketeq:reward" />,
  },
  {
    label: 'Calculator',
    href: '/calculator',
    icon: <Iconify icon="system-uicons:calculator" />,
  },
  {
    label: 'Team',
    href: '/team',
    icon: <Iconify icon="fluent:people-team-20-regular" />,
  },
  {
    label: 'Profile',
    href: '/profile',
    icon: <Iconify icon="heroicons:user" />,
  },
];
