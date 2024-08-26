export function validateEnvironmentVariable(
  name: string,
  value: string | undefined,
  logger: Console
) {
  if (typeof value === "undefined") {
    logger.error("Environment variable not set: " + name);
    throw new Error("Environment variable not set: " + name);
  }
  return value;
}
