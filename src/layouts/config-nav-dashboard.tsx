import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

import { SvgColor } from 'src/components/SvgColor';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  school: icon('ic_school'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'mineTXC Administration',
    items: [
      { title: 'Dashboard', path: paths.dashboard.history.root, icon: ICONS.analytics },
      { title: 'Sale', path: paths.dashboard.sales.root, icon: ICONS.invoice },
      { title: 'Reward', path: paths.dashboard.reward.root, icon: ICONS.label },
      { title: 'Resource', path: paths.dashboard.resource.root, icon: ICONS.folder },
      { title: 'Profile', path: paths.dashboard.profile.root, icon: ICONS.user },
    ],
  },
];
