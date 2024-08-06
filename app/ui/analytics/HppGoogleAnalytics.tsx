import { GoogleTagManager } from "@next/third-parties/google";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

if (!GOOGLE_ANALYTICS_ID) {
  console.error("Missing Google Analytics Id environment variable");
}

export function HppGoogleAnalytics() {
  return <GoogleTagManager gtmId={GOOGLE_ANALYTICS_ID} />;
}
