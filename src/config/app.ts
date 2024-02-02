const config = {
  app_url: process.env.NEXT_PUBLIC_APP_URL ,
  api_url:
    process.env.NEXT_PUBLIC_API_BASE_URL ,
  corporate_url:
    process.env.NEXT_PUBLIC_CORPORATE_URL ,
  protocol: process.env.NEXT_PUBLIC_PROTOCOL || "https://",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "",
  cookie_domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN || "",
  recaptcha_site_key: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
  gtm_id: process.env.NEXT_PUBLIC_GTM_ID || "",
  gtag_id: process.env.NEXT_PUBLIC_GTAG_ID || "",
  ahrefs_site_verification:
    process.env.NEXT_PUBLIC_AHREFS_SITE_VERIFICATION || "",
  google_site_verification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  sentry_dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "",
};

export default config;
