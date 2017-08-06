interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'WOevHKDVJ1YqOEZU1mk49bcJrgu6L9jP',
  domain: 'fabiopicheli.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
