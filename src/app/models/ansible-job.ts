export class AnsibleJob {
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

  playbook:string;
  forks: number;
  limit: number;
  verbosity: number;
  extra_vars: Object;
  job_tags: string;
  skip_tags: string;
  force_handlers: boolean;
  start_at_task: string;
  allow_simultaneous: boolean;

  inventory_id: string;
  job_template_id: string;
  project_id: string;
  scm_credential_id: string;
  network_credential_id: string;
  cloud_credential_id: string;
  credential_id: string;
  become_enabled: boolean;

  prompt_limit_on_launch: boolean;
  prompt_inventory: boolean;
  prompt_credential: boolean;
  prompt_job_type: boolean;
  prompt_variables: boolean;
  prompt_tags: boolean;

  job_cwd: string;
  job_args: Array<string>;
  job_env: Array<string>;

  created: Date;
  modified: Date;

  type: string;
  links: Object;
  meta: Object;
}
