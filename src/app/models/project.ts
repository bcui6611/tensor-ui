export class Project {
  public id: string;

  public name: string;
  public scm_type: string;
  public organization_id: string;
  public description: string;
  public local_path: string;
  public scm_url: string;
  public kind: string;
  public scm_branch: string;
  public scm_clean: boolean;
  public scm_delete_on_update: boolean;
  public credentail_id: string;
  public scm_delete_on_next_update: boolean;
  public scm_update_on_launch: boolean;
  public scm_update_cache_timeout: number;

  public last_job: string;
  public last_job_run: string;
  public last_job_failed: boolean;
  public has_schedules: boolean;
  public next_job_run: string;
  public status: string;
  public last_update_failed: boolean;
  public last_updated: string;

  public created: Date;
  public modified: Date;

  public type: string;
  public links: Object;
  public meta: Object;
}
