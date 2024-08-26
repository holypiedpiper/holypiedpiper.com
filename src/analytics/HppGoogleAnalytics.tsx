import { GoogleTagManager } from "@next/third-parties/google";

export function HppGoogleAnalytics({
  googleAnalyticsId,
}: {
  googleAnalyticsId: string;
}) {
  return <GoogleTagManager gtmId={googleAnalyticsId} />;
}
