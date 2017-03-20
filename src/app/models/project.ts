export class Project {
  id: string;

  name: string;
  scm_type: string;
  organization_id: string;
  description: string;
  local_path: string;
  scm_url: string;
  kind: string;
  scm_branch: string;
  scm_clean: boolean;
  scm_delete_on_update: boolean;
  credentail_id: string;
  scm_delete_on_next_update: boolean;
  scm_update_on_launch: boolean;
  scm_update_cache_timeout: number;

  last_job: string;
  last_job_run: string;
  last_job_failed: boolean;
  has_schedules: boolean;
  next_job_run: string;
  status: string;
  last_update_failed: boolean;
  last_updated: string;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
