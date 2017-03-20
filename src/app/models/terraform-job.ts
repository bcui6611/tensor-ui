export class TerraformJob {
  id: string;

  name: string;
  description: string;
  launch_type: string;
  cancel_flag:boolean;
  status: string;
  failed: boolean;
  started: Date;
  finished: Date;
  elapsed: number;
  result_stdout: string;
  result_get_stdout: string;
  result_traceback: string;
  job_explanation: string;
  job_type: string;
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

  job_cwd: string;
  job_args: Array<string>;
  job_env: Array<string>;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
