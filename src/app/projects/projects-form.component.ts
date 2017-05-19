import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationService } from '../services/organization.service';
import { Organization } from '../models/organization.model';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationSelectComponent } from '../shared/organizations-select.component';
import { TensorValidators } from '../lib/validators';
import { EventBusService } from '../services/event-bus.service';
import { NotificationsService } from 'angular2-notifications/dist';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { CredentialService } from '../services/credential.service';
import { Credential } from '../models/credential.model';
import { CredentialSelectComponent } from '../shared/credential-select.component';
@Component({
  selector: 'projects-form',
  templateUrl: './projects-form.component.html',
  providers: [ProjectService, OrganizationService, CredentialService]
})
export class ProjectsFormComponent implements OnInit, OnChanges {

  public model: Project;

  public organizations: Organization[];
  public credentials: Credential[];

  public projectForm: FormGroup;

  public formErrors = {
    name: '',
    organization: '',
    credential: '',
    scm_type: '',
    kind: '',
    scm_url: ''
  };

  private validationMessages = {
    name: {
      required: 'Please enter a value.'
    },
    organization: {
      validateOrganization: 'Please enter or select a valid value.',
      required: 'Please enter a value.'
    },
    credential: {
      validateOrganization: 'Please enter or select a valid value.',
    },
    scm_type: {
      required: 'Please enter a value.'
    },
    kind: {
      required: 'Please enter a value.'
    },
    scm_url: {
      required: 'Please enter a value.'
    }
  };
  private sub: any;
  private id: string;

  constructor(private organizationService: OrganizationService,
              private breadcrumbService: BreadcrumbService,
              private projectService: ProjectService,
              private credentialService: CredentialService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private modalService: NgbModal,
              private bus: EventBusService,
              private _notification: NotificationsService) {
  }

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe((p) => {
      this.id = p['id'];
      if (this.id) {
        this.projectService.get(this.id).subscribe((res) => {
            this.model = res;
            this.breadcrumbService.addFriendlyNameForRouteRegex('^/projects/[a-f\\d]{24}$', this.model.name);
            this.ngOnChanges();
          },
          (err) => {
            console.log(err);
          });
      } else {
        this.breadcrumbService.addFriendlyNameForRoute('/projects/add', 'Create Project');
      }
    });

    this.organizationService.getAll()
      .subscribe((res) => {
          this.organizations = res.data;
          this.projectForm.get('organization').setValidators([Validators.required,
            TensorValidators.validateObjectName(this.organizations)]);
        },
        (err) => {
          console.log(err);
        });

    this.credentialService.getAll()
      .subscribe((res) => {
          this.credentials = res.data;
          this.projectForm.get('credential').setValidators([TensorValidators.validateObjectName(this.credentials)]);
        },
        (err) => {
          console.log(err);
        });
    // create reactive form
    this.createForm();
  }

  public search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map((term: string) => {
        if (term.length < 2) {
          return [];
        } else {
          term = term.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
          return this.organizations.filter((v) =>
            new RegExp(term, 'gi').test(v.name)).splice(0, 10);
        }
      })

  public credentialSearch = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map((term: string) => {
        if (term.length < 2) {
          return [];
        } else {
          term = term.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
          return this.credentials.filter((v) =>
            new RegExp(term, 'gi').test(v.name)).splice(0, 10);
        }
      })

  public formatter = (x: { name: string }) => x.name;

  public ngOnChanges(): void {
    this.projectForm.reset({
      id: this.model.id,
      name: this.model.name,
      description: this.model.description,
      kind: this.model.kind,
      scm_branch: this.model.scm_branch,
      scm_url: this.model.scm_url,
      organization: this.model.meta.organization,
      credential: this.model.meta.credential,
      scm_type: this.model.scm_type,
      scm_clean: this.model.scm_clean,
      scm_delete_on_update: this.model.scm_delete_on_update,
      scm_update_on_launch: this.model.scm_update_on_launch
    });
  }

  public getValue(elem: string): string {
    return this.projectForm.get(elem).value;
  }

  public organizationOpen(): void {
    this.modalService.open(OrganizationSelectComponent).result.then((result) => {
      this.projectForm.patchValue({
        organization: result
      });
    }, (err) => {
      console.debug(err);
    });
  }

  public credentialOpen(): void {
    const modelRef = this.modalService.open(CredentialSelectComponent);
    modelRef.componentInstance.kind = 'scm';
    modelRef.result.then((result) => {
      this.projectForm.patchValue({
        credential: result
      });
    }, (err) => {
      console.debug(err);
    });
  }

  public onSubmit(): void {
    this.model = this.prepareSave();
    if (this.model.id) { // update a credential
      this.projectService.update(this.model)
        .toPromise().then((data: Project) => {
        this.router.navigate(['/projects/' + this.model.id]);
        this._notification.success('Success', 'Credential updated');
      }).catch((ex) => {
        this._notification.error('Error', 'Unable to update ' + this.model.name);
      });
    } else { // create a new credential
      this.projectService.create(this.model).toPromise().then((data: Project) => {
        this.router.navigate(['/projects/' + this.model.id]);
        this._notification.success('Success', this.model.name + ' created');
      }).catch((ex) => {
        this._notification.error('Error', 'Unable to create');
      });
    }

    this.bus.dispatch(new Event('project_modify'));
  }

  private prepareSave(): Project {
    const formModel = this.projectForm.value;

    const save: Project = {
      id: formModel.id as string,
      name: formModel.name as string,
      description: formModel.description as string,
      kind: formModel.kind as string,
      credential: formModel.credential as string,
      scm_branch: formModel.scm_branch as string,
      organization: formModel.organization as string,
      scm_url: formModel.scm_url as string,
      scm_type: formModel.scm_type as string,
      scm_clean: formModel.scm_clean as boolean,
      scm_delete_on_update: formModel.scm_delete_on_update as boolean,
      scm_update_on_launch: formModel.scm_update_on_launch as boolean,
      local_path: formModel.local_path as string
    } as Project;

    if (formModel.organization instanceof Object) {
      save.organization = formModel.organization.id as string;
    }

    if (formModel.credential instanceof Object) {
      save.credential = formModel.credential.id as string;
    }
    return save;
  }

  private createForm() {
    this.projectForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      kind: ['', Validators.required],
      credential: [],
      scm_branch: [''],
      organization: [''],
      scm_url: ['', Validators.required],
      scm_type: ['', Validators.required],
      scm_clean: [false],
      scm_delete_on_update: [false],
      scm_update_on_launch: [false],
      local_path: ['']
    });

    this.projectForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));
    this.onValueChanged();
  }

  private onValueChanged(data?: any) {
    const form = this.projectForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
