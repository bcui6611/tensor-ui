export class Group {
  id: string;

  name: string;
  description: string;
  variables: string;
  total_hosts: string;
  has_active_failures: boolean;
  hosts_with_active_failures: number;
  total_groups: number;
  groups_with_active_failures: number;
  has_inventory_sources: boolean;

  inventory_id: string;
  parent_group_id: string;


  last_job: Object;
  last_job_host_summary: Object;

  children: Array<Group>;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
