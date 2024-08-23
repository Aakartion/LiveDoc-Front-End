import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d0471cc0aa9732f6250e3151e437e5bb@o4507823860088832.ingest.us.sentry.io/4507823862448128",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});