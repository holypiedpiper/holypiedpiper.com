import { useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { ResourcesConfig } from "aws-amplify";
import { initializeAuth } from "./setup";

import "@aws-amplify/ui-react/styles.css";

export default function HppAwsAuthenticator({
  awsConfig,
  children,
}: {
  awsConfig: ResourcesConfig;
  children: React.ReactNode;
}) {
  useEffect(() => {
    initializeAuth(awsConfig);
  }, [awsConfig]);

  return <Authenticator>{children}</Authenticator>;
}
