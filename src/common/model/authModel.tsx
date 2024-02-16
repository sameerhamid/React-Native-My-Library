export class Settings {
  id?: number;
  user?: null;
  error_reports?: boolean;
  analytics?: boolean;
  autoplay_viedeos?: boolean;
  defualt_unit?: string;
}
export class AuthModel {
  id?: number;
  name?: string;
  gender?: null;
  email?: string;
  mobile?: null;
  country_code?: null;
  dob?: null;
  email_verified_at?: null;
  is_admin_verified?: boolean;
  profile_picture?: null; //pending
  status?: null; //pending
  access_token?: string;
  refresh_token?: string;
  settings?: Settings;
  created_at?: string;
}
