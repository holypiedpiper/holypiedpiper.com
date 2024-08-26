import { useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { initializeAuth } from "./setup";

import "@aws-amplify/ui-react/styles.css";

export default function HppAwsAuthenticator({ awsConfig, children }) {
  useEffect(() => {
    initializeAuth(awsConfig);
  }, []);

  return <Authenticator>{children}</Authenticator>;
}
