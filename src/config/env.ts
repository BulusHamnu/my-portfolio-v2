/* Env vars */
interface Env {
  ADMIN_EMAIL: string;
  RESEND_KEY: string;
}

const env: Env = {
  ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL as string,
  RESEND_KEY: import.meta.env.VITE_RESEND_KEY as string,
};

export default env;
