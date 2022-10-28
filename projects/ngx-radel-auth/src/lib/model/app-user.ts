export interface AppUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
  avatar: string;
  tokenClaims: { [key: string]: any };
}
