export class Credential {
  public id: string;

  public name: string;
  public kind: string;

  public cloud: boolean;
  public description: string;
  public host: string;
  public username: string;
  public email: string;
  public password: string;
  public security_token: string;
  public project: string;
  public domain: string;
  public ssh_key_data: string;
  public ssh_key_unlock: string;
  public become_method: string;
  public become_username: string;
  public become_password: string;
  public vault_password: string;
  public subscription: string;
  public tenant: string;
  public secret: string;
  public client: string;
  public token: string;
  public authorize: boolean;
  public authorize_password: string;
  public organization: string;

  public ask_password_on_launch: boolean;
  public ask_vault_password_on_launch: boolean;
  public ask_become_password_on_launch: boolean;
  public ask_ssh_key_unlock_on_launch: boolean;

  public created: Date;
  public modified: Date;

  public type: string;
  public links: Object;
  public meta: Object;
}
