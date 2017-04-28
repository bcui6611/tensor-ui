export class Host {
  public id: string;

  public name: string;
  public description: string;
  public inventory_id: string;
  public group_id: string;
  public instance_id: boolean;
  public variables: number;
  public enabled: boolean;

  public last_job_id: string;
  public last_job_host_summary_id: string;

  public has_active_failures: boolean;
  public has_inventory_sources: boolean;

  public created: Date;
  public modified: Date;

  public type: string;
  public links: Object;
  public meta: Object;
}
