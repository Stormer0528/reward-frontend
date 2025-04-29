// ----------------------------------------------------------------------

const ROOTS = {
  // Auth
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  UPDATE_PASSWORD: '/update-password',
  VERIFY_EMAIL: '/verify-email',
  VERIFYRESULT: '/thanks',

  // Pages
  INTRO: '/intro',
  CALCULATOR: '/calculator',
  STATISTICS: '/statistics',
  RAPIDREWARDS: '/rapid-rewards',
  CONTACT: '/contact',

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
  COMMUNICATION: '/communication',
  SILVER_GUARANTEE: '/silverbugs',
  NOTIFICATIONS: '/notifications',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    signIn: ROOTS.SIGN_IN,
    signUp: ROOTS.SIGN_UP,

    // FORGOT PASSWORD
    forgotPassword: ROOTS.FORGOT_PASSWORD,

    // RESET PASSWORD
    resetPassword: ROOTS.RESET_PASSWORD,

    // RESET PASSWORD
    updatePassword: ROOTS.UPDATE_PASSWORD,

    // VERIFY EMAIL
    verifyEmail: ROOTS.VERIFY_EMAIL,

    // RESULT
    verifyResult: ROOTS.VERIFYRESULT,
  },

  // PAGES
  pages: {
    // INTRO
    intro: { root: ROOTS.INTRO },

    // RAPID REWARDS
    rapidRewards: { root: ROOTS.RAPIDREWARDS },

    // SILVER GUARANTEE
    silverGuarantee: { root: ROOTS.SILVER_GUARANTEE },

    // CONTACT
    contact: { root: ROOTS.CONTACT },

    // STATISTICS
    statistics: { root: ROOTS.STATISTICS },
  },

  // DASHBOARD
  dashboard: {
    root: '/',
    history: {
      root: ROOTS.DASHBOARD,
    },
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
    mail: {
      root: ROOTS.MAIL,
    },
    calculator: { root: ROOTS.CALCULATOR },
  },
  notFound: '/404',
};
