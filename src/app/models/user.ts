export class User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;

  is_superuser: boolean;
  is_system_auditor: boolean;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
