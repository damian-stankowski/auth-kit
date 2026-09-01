import type { FederatedCredentials } from "../models/federated-credentials.class";

export interface FederatedAuthenticationService<TProvider extends string = string, TCredentials = unknown> {
  authenticateAsync(): Promise<FederatedCredentials<TProvider, TCredentials>>;
}
