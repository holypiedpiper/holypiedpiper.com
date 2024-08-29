"use client";

import HppAwsAuthenticator from "src/auth/HppAwsAuthenticator";
import { AwsConfig } from "./aws-config";

export function HppNextAuthenticator({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HppAwsAuthenticator awsConfig={AwsConfig}>{children}</HppAwsAuthenticator>
  );
}
