import { HppGoogleAnalytics } from "src/analytics/HppGoogleAnalytics";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

if (!GOOGLE_ANALYTICS_ID) {
  console.error("Missing Google Analytics Id environment variable");
}

export function HppNextGoogleAnalytics() {
  return <HppGoogleAnalytics googleAnalyticsId={GOOGLE_ANALYTICS_ID} />;
}
