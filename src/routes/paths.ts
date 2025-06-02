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
  SALES: '/sales',
  REWARD: '/reward',
  SPONSOR: '/sponsor',
  PLACEMENT: '/placement',
  COMMISSION: '/commission',
  RESOURCE: '/resource',
  PROFILE: '/profile',
  TEAM: '/team',
  MAIL: '/mail',
  INVOICE: '/invoices',
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
    sales: {
      root: ROOTS.SALES,
      edit: (id: string) => `${ROOTS.SALES}/${id}`,
      new: `${ROOTS.SALES}/new`,
    },
    reward: {
      root: ROOTS.REWARD,
      new: `${ROOTS.REWARD}/new`,
      edit: (id: string) => `${ROOTS.REWARD}/new/${id}`,
      detail: (id: string) => `${ROOTS.REWARD}/${id}`,
      view: (id: string) => `${ROOTS.REWARD}/statistics/${id}`,
    },
    sponsor: { root: ROOTS.SPONSOR },
    placement: { root: ROOTS.PLACEMENT },
    commission: { root: ROOTS.COMMISSION, action: `${ROOTS.COMMISSION}/action` },
    resource: { root: ROOTS.RESOURCE, view: (slug: string) => `${ROOTS.RESOURCE}/${slug}` },
    profile: {
      root: ROOTS.PROFILE,
    },
    notifications: {
      root: ROOTS.NOTIFICATIONS,
    },
    communication: {
      root: ROOTS.COMMUNICATION,
    },
    team: {
      root: ROOTS.TEAM,
    },
    invoice: { root: ROOTS.INVOICE },
    mail: {
      root: ROOTS.MAIL,
    },
    calculator: { root: ROOTS.CALCULATOR },
  },
  notFound: '/404',
};
