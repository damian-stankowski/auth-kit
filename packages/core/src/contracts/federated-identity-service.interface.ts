import type { FederatedCredentials } from "../models/federated-credentials.class";

export interface FederatedIdentityService<TProvider extends string = string, TCredentials = unknown> {
  authenticateAsync(): Promise<FederatedCredentials<TProvider, TCredentials>>;
}
