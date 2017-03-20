export class Credential {
  id: string;

  name: string;
  kind: string;

  cloud: boolean;
  description: string;
  host: string;
  username: string;
  password: string;
  security_token: string;
  project: string;
  domain: string;
  ssh_key_data: string;
  ssh_key_unlock: string;
  become_method: string;
  become_username: string;
  become_password: string;
  vault_password: string;
  subscription: string;
  tenant: string;
  secret: string;
  client: string;
  authorize: boolean;
  authorize_password: string;
  orgization: string;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
