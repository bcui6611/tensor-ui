export class TerraformJobTmpl {
  public  id: string;

  public name: string;
  public job_type: string;

  public  description: string;
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
  public vars: Object;
  public parallelism: number;
  public update_on_launch: boolean;
  public target: string;
  public directory: string;

  public credential_id: string;
  public job_template_id: string;
  public project_id: string;
  public scm_credential_id: string;
  public network_credential_id: string;
  public cloud_credential_id: string;

  public prompt_credential: boolean;
  public prompt_job_type: boolean;
  public prompt_variables: boolean;
  public allow_simultaneous: boolean;

  public last_job_run: Date;
  public next_job_run: Date;
  public current_job_id: string;
  public current_update_id: string;
  public last_job_id: string;
  public next_shedule_id: string;
  public last_job_failed: boolean;
  public has_schedules: boolean;

  public job_cwd: string;
  public job_args: string[];
  public job_env: string[];

  public created: Date;
  public modified: Date;

  public type: string;
  public links: Object;
  public meta: Object;
}
