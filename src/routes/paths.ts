// ----------------------------------------------------------------------

const ROOTS = {
  INDEX: '/',

  // Auth
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  UPDATE_PASSWORD: '/update-password',
  VERIFY_EMAIL: '/verify-email',
  VERIFY_RESULT: '/thanks',

  // Pages
  INTRO: '/intro',
  CALCULATOR: '/calculator',
  STATISTICS: '/statistics',
  RAPID_REWARDS: '/rapid-rewards',
  CONTACT: '/contact',
  ORDER: '/order',
  SILVER_GUARANTEE: '/silver-bugs',

  // Dashboard
  DASHBOARD: '/dashboard',
  ORDERS: '/orders',
  REWARD: '/reward',
  SPONSORSHIPS: '/sponsorships',
  PLACEMENT: '/placement',
  COMMISSION: '/commission',
  RESOURCE: '/resource',
  PROFILE: '/profile',
  TEAM: '/team',
  MAIL: '/mail',
  INVOICE: '/invoices',
  TXC_REQUEST: 'txc-request',
  COMMUNICATION: '/communication',
  NOTIFICATIONS: '/notifications',
};

// ----------------------------------------------------------------------

export const paths = {
  root: ROOTS.INDEX,
  // AUTH
  auth: {
    signIn: ROOTS.SIGN_IN,
    signUp: ROOTS.SIGN_UP,

    // FORGOT PASSWORD
    forgotPassword: ROOTS.FORGOT_PASSWORD,

    // RESET PASSWORD
    resetPassword: ROOTS.RESET_PASSWORD,

    // UPDATE PASSWORD
    updatePassword: ROOTS.UPDATE_PASSWORD,

    // VERIFY EMAIL
    verifyEmail: ROOTS.VERIFY_EMAIL,

    // RESULT
    verifyResult: ROOTS.VERIFY_RESULT,
  },

  // PAGES
  pages: {
    // INTRO
    intro: ROOTS.INTRO,

    // RAPID REWARDS
    rapidRewards: ROOTS.RAPID_REWARDS,

    // SILVER GUARANTEE
    silverGuarantee: ROOTS.SILVER_GUARANTEE,

    // CONTACT
    contact: ROOTS.CONTACT,

    // STATISTICS
    statistics: ROOTS.STATISTICS,

    // ORDER
    order: { root: ROOTS.ORDER, detail: (id: string) => `${ROOTS.ORDER}/${id}` },
  },

  // DASHBOARD
  dashboard: {
    root: '/overview',
    orders: {
      root: ROOTS.ORDERS,
      edit: (id: string) => `${ROOTS.ORDERS}/${id}`,
      new: `${ROOTS.ORDERS}/new`,
    },
    reward: {
      root: ROOTS.REWARD,
      tabMatch: `${ROOTS.REWARD}/:tab`,
    },
    sponsorships: { root: ROOTS.SPONSORSHIPS, tabMatch: `${ROOTS.SPONSORSHIPS}/:tab` },
    placement: { root: ROOTS.PLACEMENT },
    commission: { root: ROOTS.COMMISSION, action: `${ROOTS.COMMISSION}/action` },
    resource: { root: ROOTS.RESOURCE, view: (slug: string) => `${ROOTS.RESOURCE}/${slug}` },
    profile: {
      root: ROOTS.PROFILE,
      tabMatch: `${ROOTS.PROFILE}/:tab`,
    },
    notifications: {
      root: ROOTS.NOTIFICATIONS,
    },
    communication: {
      root: ROOTS.COMMUNICATION,
    },
    team: {
      root: ROOTS.TEAM,
      tabMatch: `${ROOTS.TEAM}/:tab`,
    },
    invoice: { root: ROOTS.INVOICE },
    mail: {
      root: ROOTS.MAIL,
    },
    calculator: { root: ROOTS.CALCULATOR },
    txcRequest: { root: ROOTS.TXC_REQUEST, new: `${ROOTS.TXC_REQUEST}/new` },
  },
  notFound: '/404',
};
