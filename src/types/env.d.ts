/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_EMAIL_SERVICE_ID: string
  readonly VITE_EMAIL_TEMPLATE_ID: string
  readonly VITE_EMAIL_USER_ID: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_SITE_URL: string
  readonly VITE_SITE_NAME: string
  readonly VITE_YOUTUBE_API_KEY: string
  readonly VITE_GOOGLE_MAPS_API_KEY: string
  readonly VITE_DEBUG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}