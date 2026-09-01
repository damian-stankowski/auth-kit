export type FederatedCredentialsCreateParams<
  TProvider extends string,
  TCredentials,
> = Readonly<{
  provider: TProvider;
  credentials: Readonly<TCredentials>;
}>;

export class FederatedCredentials<
  TProvider extends string = string,
  TCredentials = unknown,
> {
  protected readonly _credentials: Readonly<TCredentials>;

  protected readonly _provider: TProvider;

  protected constructor(
    credentials: Readonly<TCredentials>,
    provider: TProvider,
  ) {
    this._credentials = Object.freeze(credentials);
    this._provider = provider;
  }

  public static create<
    TProvider extends string,
    TCredentials,
  >(
    params: FederatedCredentialsCreateParams<TProvider, TCredentials>,
  ): FederatedCredentials<TProvider, TCredentials> {
    return new FederatedCredentials(
      params.credentials,
      params.provider,
    );
  }

  public get credentials(): Readonly<TCredentials> {
    return this._credentials;
  }

  public get provider(): TProvider {
    return this._provider;
  }
}
