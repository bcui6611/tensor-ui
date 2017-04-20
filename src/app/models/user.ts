export class User {
  public id: number;
  public username: string;
  public first_name: string;
  public last_name: string;
  public email: string;

  public is_superuser: boolean;
  public is_system_auditor: boolean;

  public created: Date;
  public modified: Date;

  public  type: string;
  public  links: Object;
  public  meta: Object;
}
