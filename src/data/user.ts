export interface User {
  id: number | null,
  email: string | null,
  signedIn: boolean;
  deviceID: string | null;
}
