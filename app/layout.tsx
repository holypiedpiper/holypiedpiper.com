import type { Metadata } from "next";
import { HppGoogleAnalytics } from "./ui/analytics/HppGoogleAnalytics";
import { HppHeapIo } from "./ui/analytics/HppHeapIo";

import "./ui/index.css";

export const metadata: Metadata = {
  title: "holy pied Piper",
  description:
    "Holy (kream) pied Piper is a hot FTM slut who loves to suck cock and get filled with cum. Come here for videos, photos, and exclusive access to Piper's trans man pussy!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/sweat-droplets.svg" />
      </head>
      <HppGoogleAnalytics />
      <HppHeapIo />
      <body>
        <div
          id="root"
          className="min-h-screen flex flex-col align-middle justify-center"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
