export class Host {
  id: string;

  name: string;
  description: string;
  inventory_id: string;
  group_id: string;
  instance_id: boolean;
  variables: number;
  enabled: boolean;

  last_job_id: string;
  last_job_host_summary_id: string;

  has_active_failures: boolean;
  has_inventory_sources: boolean;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
