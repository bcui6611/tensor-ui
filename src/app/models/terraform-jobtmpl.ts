export class TerraformJobTmpl {
  id: string;

  name: string;
  job_type: string;

  description: string;
  launch_type: string;
  cancel_flag: boolean;
  status: string;
  failed: boolean;
  started: Date;
  finished: Date;
  elapsed: number;
  result_stdout: string;
  result_get_stdout: string;
  result_traceback: string;
  job_explanation: string;
  vars: Object;
  parallelism: number;
  update_on_launch: boolean;
  target: string;
  directory: string;

  credential_id: string;
  job_template_id: string;
  project_id: string;
  scm_credential_id: string;
  network_credential_id: string;
  cloud_credential_id: string;

  prompt_credential: boolean;
  prompt_job_type: boolean;
  prompt_variables: boolean;
  allow_simultaneous: boolean;

  last_job_run: Date;
  next_job_run: Date;
  current_job_id: string;
  current_update_id: string;
  last_job_id: string;
  next_shedule_id: string;
  last_job_failed: boolean;
  has_schedules: boolean;

  job_cwd: string;
  job_args: Array<string>;
  job_env: Array<string>;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object
}
