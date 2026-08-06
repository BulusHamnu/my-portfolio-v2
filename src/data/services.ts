/* Services Data */
export interface Service {
  iconUrl: string;
  name: string;
  description: string;
}

const Services: Service[] = [
  {
    iconUrl: "/icons/custom-web-applications.svg",
    name: "Custom Web Applications",
    description:
      "Need a custom web application for your business or idea? I build responsive applications tailored to your workflow and goals.",
  },
  {
    iconUrl: "/icons/backend-apis.svg",
    name: "Backend APIs",
    description:
      "Secure backend systems with authentication, databases, file uploads, email notifications, and third-party integrations.",
  },
  {
    iconUrl: "/icons/payment-integration.svg",
    name: "Payment Integration",
    description:
      "Stripe, Lemon Squeezy, Paystack, subscriptions, one-time payments, and webhooks.",
  },
  {
    iconUrl: "/icons/dashboard-admin-panels.svg",
    name: "Dashboard & Admin Panels",
    description:
      "Internal dashboards and admin systems for managing users, content, analytics, and business operations.",
  },
  {
    iconUrl: "/icons/software-improvements.svg",
    name: "Software Improvements",
    description:
      "Adding new features, fixing bugs, improving performance, or cleaning up existing code.",
  },
  {
    iconUrl: "/icons/automation-integrations.svg",
    name: "Automation & Integrations",
    description:
      "Connect your software with third-party services, automate repetitive tasks, and integrate payment gateways, email providers, cloud storage, and external APIs.",
  },
];

export default Services;
