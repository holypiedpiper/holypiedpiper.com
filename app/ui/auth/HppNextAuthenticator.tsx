"use client";

import HppAwsAuthenticator from "src/auth/HppAwsAuthenticator";
import { AwsConfig } from "./aws-config";

export function HppNextAuthenticator({ children }) {
  return (
    <HppAwsAuthenticator awsConfig={AwsConfig}>{children}</HppAwsAuthenticator>
  );
}
