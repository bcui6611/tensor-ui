export class Group {
  public id: string;

  public name: string;
  public description: string;
  public variables: string;
  public total_hosts: string;
  public  has_active_failures: boolean;
  public  hosts_with_active_failures: number;
  public total_groups: number;
  public groups_with_active_failures: number;
  public has_inventory_sources: boolean;

  public inventory_id: string;
  public parent_group_id: string;


  public last_job: Object;
  public last_job_host_summary: Object;

  public children: Group[];

  public created: Date;
  public modified: Date;

  public type: string;
  public links: Object;
  public  meta: Object;
}
