export const AUTH_ROUTER_PATH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  CREATE_NEW_PASSWORD: '/auth/create-new-password',
};

export const MAIN_ROUTER_PATH = {
  HOME: '/',
  OVERVIEW: '/overview',
  PRIVACY: '/privacy',
  FAQS: '/faqs',
};

export const ACCOUNT_ROUTER_PATH = {
  ACCOUNT: '/account',
  PROFILE: '/account/profile',
  CHANGE_PASSWORD: '/account/change-password',
  NOTIFICATION: '/account/notification',
  YOUR_DEVICE: '/account/your-device',
  SOCIAL_LINK: '/account/social-link',
  YOUR_DEVICE_DETAIL: '/account/your-device/:id',
};

export const STYLE_ROUTER_PATH = {
  STYLE: '/style',
  STYLE_BUTTON: '/style/button',
  STYLE_INPUT: '/style/input',
};

export const ROUTER_PATH = {
  ...AUTH_ROUTER_PATH,
  ...MAIN_ROUTER_PATH,
  ...ACCOUNT_ROUTER_PATH,
  ...STYLE_ROUTER_PATH,
};
