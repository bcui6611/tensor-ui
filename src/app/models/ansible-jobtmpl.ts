export class AnsibleJobTmpl {
  public id: string;

  public name: string;
  public description: string;
  public launch_type: string;
  public cancel_flag: boolean;
  public status: string;
  public failed: boolean;
  public started: Date;
  public finished: Date;
  public elapsed: number;
  public result_stdout: string;
  public result_get_stdout: string;
  public result_traceback: string;
  public job_explanation: string;
  public job_type: string;

  public playbook: string;
  public forks: number;
  public limit: number;
  public verbosity: number;
  public extra_vars: Object;
  public job_tags: string;
  public skip_tags: string;
  public force_handlers: boolean;
  public start_at_task: string;
  public allow_simultaneous: boolean;

  public inventory_id: string;
  public job_template_id: string;
  public project_id: string;
  public scm_credential_id: string;
  public network_credential_id: string;
  public cloud_credential_id: string;
  public credential_id: string;
  public become_enabled: boolean;

  public polymorphic_ctype_id: string;

  public prompt_limit_on_launch: boolean;
  public prompt_inventory: boolean;
  public prompt_credential: boolean;
  public prompt_job_type: boolean;
  public prompt_variables: boolean;
  public prompt_tags: boolean;
  public prompt_skip_tags: boolean;

  public last_job_run: Date;
  public next_job_run: Date;
  public current_job_id: string;
  public current_update_id: string;
  public last_job_id: string;
  public next_schedule_id: string;
  public last_job_failed: boolean;
  public has_schedules: boolean;

  public kind: string;

  public job_cwd: string;
  public job_args: string[];
  public job_env: string[];

  public created: Date;
  public modified: Date;

  public type: string;
  public links: Object;
  public meta: Object;
}
