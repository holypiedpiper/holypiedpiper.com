import type { Metadata } from "next";
import { HppNextGoogleAnalytics } from "./ui/analytics/HppNextGoogleAnalytics";
import { HppNextHeapIo } from "./ui/analytics/HppNextHeapIo";
import RootLayout, { metadata as HppMetadata } from "src/layout/RootLayout";

export const metadata: Metadata = HppMetadata;

export default function NextRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout
      googleAnalytics={<HppNextGoogleAnalytics />}
      heapIo={<HppNextHeapIo />}
    >
      {children}
    </RootLayout>
  );
}
