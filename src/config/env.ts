/* Env vars */
interface Env {
  ADMIN_EMAIL: string;
  RESEND_KEY: string;
  FORM_SPREE_URL: string;
}

const env: Env = {
  ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL as string,
  RESEND_KEY: import.meta.env.VITE_RESEND_KEY as string,
  FORM_SPREE_URL: import.meta.env.VITE_FORM_SPREE_URL as string,
};

export default env;
