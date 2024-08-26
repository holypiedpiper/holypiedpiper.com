import { HppGoogleAnalytics } from "src/analytics/HppGoogleAnalytics";
import { validateEnvironmentVariable } from "src/utilities/validateEnvironmentVariable";

const googleAnalyticsId = validateEnvironmentVariable(
  "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID",
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  console
);

export function HppNextGoogleAnalytics() {
  return <HppGoogleAnalytics googleAnalyticsId={googleAnalyticsId} />;
}
