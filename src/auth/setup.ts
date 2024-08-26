import { Amplify, ResourcesConfig } from "aws-amplify";

export function initializeAuth(config: ResourcesConfig) {
  Amplify.configure(config);
}
