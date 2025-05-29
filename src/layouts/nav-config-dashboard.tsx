import type { NavSectionProps } from 'src/components/NavSection';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config';

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

/**
 * Input nav data is an array of navigation section items used to define the structure and content of a navigation bar.
 * Each section contains a subheader and an array of items, which can include nested children items.
 *
 * Each item can have the following properties:
 * - `title`: The title of the navigation item.
 * - `path`: The URL path the item links to.
 * - `icon`: An optional icon component to display alongside the title.
 * - `info`: Optional additional information to display, such as a label.
 * - `allowedRoles`: An optional array of roles that are allowed to see the item.
 * - `caption`: An optional caption to display below the title.
 * - `children`: An optional array of nested navigation items.
 * - `disabled`: An optional boolean to disable the item.
 * - `deepMatch`: An optional boolean to indicate if the item should match subpaths.
 */
export const navData: NavSectionProps['data'] = [
  /**
   * Overview
   */
  {
    subheader: 'mineTXC Administration',
    items: [
      { title: 'Dashboard', path: paths.dashboard.history.root, icon: ICONS.analytics },
      { title: 'Sale', path: paths.dashboard.sales.root, icon: ICONS.sale },
      { title: 'Sponsor', path: paths.dashboard.sponsor.root, icon: ICONS.sponsor },
      { title: 'Placement', path: paths.dashboard.placement.root, icon: ICONS.diagram },
      { title: 'Commission', path: paths.dashboard.commission.root, icon: ICONS.commission },
      { title: 'Invoice', path: paths.dashboard.invoice.root, icon: ICONS.invoice },
      { title: 'Resource', path: paths.dashboard.resource.root, icon: ICONS.folder },
      { title: 'Reward', path: paths.dashboard.reward.root, icon: ICONS.reward },
      { title: 'Calculator', path: paths.dashboard.calculator.root, icon: ICONS.calculator },
      { title: 'Team', path: paths.dashboard.team.root, icon: ICONS.team },
      { title: 'Mail', path: paths.dashboard.mail.root, icon: ICONS.mail },
      { title: 'Communication', path: paths.dashboard.communication.root, icon: ICONS.send },
      { title: 'Profile', path: paths.dashboard.profile.root, icon: ICONS.user },
    ],
  },
];
