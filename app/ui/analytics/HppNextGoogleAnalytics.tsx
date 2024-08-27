import { HppGoogleAnalytics } from "src/analytics/HppGoogleAnalytics";
import { validateEnvironmentVariable } from "src/utilities/validateEnvironmentVariable";

export function HppNextGoogleAnalytics() {
  return <HppGoogleAnalytics googleAnalyticsId={googleAnalyticsId} />;
}

const googleAnalyticsId = validateEnvironmentVariable(
  "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID",
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  console,
);
