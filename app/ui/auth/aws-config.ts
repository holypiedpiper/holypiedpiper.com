import { ResourcesConfig } from "aws-amplify";
import { validateEnvironmentVariable } from "src/utilities/validateEnvironmentVariable";

const awsUserPoolId = validateEnvironmentVariable(
  "NEXT_PUBLIC_AWS_USER_POOL_ID",
  process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
  console
);

const awsUserPoolClientId = validateEnvironmentVariable(
  "NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID",
  process.env.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID,
  console
);

export const AwsConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: awsUserPoolClientId,
      userPoolId: awsUserPoolId,
    },
  },
};
