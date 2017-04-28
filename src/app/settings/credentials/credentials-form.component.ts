import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialService } from '../../services/credential.service';
import { OrganizationService } from '../../services/organization.service';
import { Organization } from '../../models/organization';
import { Credential } from '../../models/credential';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationSelectComponent } from '../../shared/organizations-select.component';
import { TensorValidators } from '../../lib/validators';

@Component({
  selector: 'credentials-add',
  templateUrl: './credentials-form.component.html',
  providers: [CredentialService, OrganizationService],
})
export class CredentialsFormComponent implements OnInit, OnChanges {
  public model: Credential;

  public organizations: Organization[];
  public organizationList: string[] = [];

  public credentialForm: FormGroup;

  public formErrors = {
    name: '',
    organization: '',
    kind: '',

    username: '',
    email: '',

    // aws
    client: '',
    secret: '',
    token: '',

    ssh_key_data: ''
  };

  private validationMessages = {
    name: {
      required: 'Please enter a value.',
    },
    organization: {
      validateOrganization: 'Please enter or select a valid value.',
    },
    kind: {
      required: 'Please enter a value.',
    },

    username: {
      required: 'Please enter a value.',
    },

    // aws
    client: {
      required: 'Please enter a value.',
    },
    secret: {
      required: 'Please enter a value.',
    },
    token: {
      required: 'Please enter a value.',
    },

    ssh_key_data: {
      required: 'Please enter a value.'
    },

    // gce
    email: {
      required: 'Please enter a value.',
      email: 'Please enter a valid email.',
    },

  };

  constructor(private organizationService: OrganizationService,
              private breadcrumbService: BreadcrumbService,
              private credentialService: CredentialService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private modalService: NgbModal) {
    breadcrumbService.addFriendlyNameForRoute('/settings/credentials/add', 'Create');
    const name = this.route.params.subscribe((p) => {
      if (p['name']) {
        breadcrumbService.addFriendlyNameForRoute('/settings/credentials/' + this.route.snapshot.url.join(''), p['name']);

        this.credentialService.getByName(p['name']).subscribe((res) => {
            this.model = res;
            this.ngOnChanges();
          },
          (err) => {
            console.log(err);
          });
      }
    });

    this.organizationService.getAll()
      .subscribe((res) => {
          this.organizations = res;
          for (const organization of this.organizations) {
            this.organizationList.push(organization.name);
          }
        },
        (err) => {
          console.log(err);
        });

    // create reactive form
    this.createForm();
  }

  public ngOnInit(): void {
    console.log('hello `CredentialsAdd` component');
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

  public formatter = (x: { name: string }) => x.name;

  public ngOnChanges(): void {
    this.credentialForm.reset({
      id: this.model.id,
      name: this.model.name,
      description: this.model.description,
      kind: this.model.kind,
      username: this.model.username,
      password: this.model.password,
      project: this.model.project,

      // linux
      become_method: this.model.become_method,
      become_username: this.model.become_username,
      become_password: this.model.become_password,

      // gce
      email: this.model.email,

      // aws
      client: this.model.client,
      secret: this.model.secret,
      token: this.model.token,

      ssh_key_data: this.model.ssh_key_data,
      ssh_key_unlock: this.model.ssh_key_unlock,

      ask_password_on_launch: this.model.ask_password_on_launch,
      ask_vault_password_on_launch: this.model.ask_vault_password_on_launch,
      ask_become_password_on_launch: this.model.ask_become_password_on_launch,
      ask_ssh_key_unlock_on_launch: this.model.ask_ssh_key_unlock_on_launch,
    });
  }

  public getValue(elem: string): string {
    return this.credentialForm.get(elem).value;
  }

  public organizationOpen(): void {
    this.modalService.open(OrganizationSelectComponent).result.then((result) => {
      this.credentialForm.patchValue({
        organization: result,
      });
    }, (err) => {
      console.debug(err);
    });
  }

  public onSubmit(): void {
    this.model = this.prepareSaveCredential();
    if (this.model.id) { // update a credential
      this.credentialService.update(this.model)
        .toPromise().then((data: Credential) => {
        this.router.navigate(['/settings/credentials/' + this.model.name]);
      }).catch((ex) => {
        console.error('Error', ex);
      });
    } else { // create a new credential
      this.credentialService.create(this.model).toPromise().then((data: Credential) => {
        this.router.navigate(['/settings/credentials/' + this.model.name]);
      }).catch((ex) => {
        console.error('Error', ex);
      });
    }
  }

  private prepareSaveCredential(): Credential {
    const formModel = this.credentialForm.value;

    const saveCredential: Credential = {
      id: formModel.id as string,
      name: formModel.name as string,
      description: formModel.description as string,
    } as Credential;

    if (formModel.organization instanceof Object) {
      saveCredential.organization = formModel.organization.id as string;
    }

    saveCredential.kind = formModel.kind as string;

    switch (saveCredential.kind) {
      case 'win': {
        saveCredential.username = formModel.username as string;
        saveCredential.password = formModel.password as string;
        saveCredential.vault_password = formModel.vault_password as string;
        saveCredential.ask_password_on_launch = formModel.ask_password_on_launch as boolean;
        saveCredential.ask_vault_password_on_launch = formModel.ask_vault_password_on_launch as boolean;
        break;
      }
      case 'ssh': {
        saveCredential.username = formModel.username as string;
        saveCredential.password = formModel.password as string;
        saveCredential.vault_password = formModel.vault_password as string;
        saveCredential.ask_password_on_launch = formModel.ask_password_on_launch as boolean;
        saveCredential.ask_vault_password_on_launch = formModel.ask_vault_password_on_launch as boolean;
        saveCredential.ssh_key_data = formModel.ssh_key_data as string;
        saveCredential.ssh_key_unlock = formModel.ssh_key_unlock as string;
        saveCredential.ask_ssh_key_unlock_on_launch = formModel.ask_ssh_key_unlock_on_launch as boolean;

        saveCredential.become_method = formModel.become_method as string;

        if (saveCredential.become_method) {
          saveCredential.become_username = formModel.become_username as string;
          saveCredential.become_password = formModel.become_password as string;
          saveCredential.ask_become_password_on_launch = formModel.ask_become_password_on_launch as boolean;
        }
        break;
      }
      case 'net': {
        saveCredential.username = formModel.username as string;
        saveCredential.password = formModel.password as string;
        saveCredential.ssh_key_unlock = formModel.ssh_key_unlock as string;
        saveCredential.ssh_key_data = formModel.ssh_key_data as string;
        saveCredential.authorize = formModel.authorize as boolean;
        saveCredential.authorize_password = formModel.authorize_password as string;
        break;
      }
      case 'scm': {
        saveCredential.username = formModel.username as string;
        saveCredential.password = formModel.password as string;
        saveCredential.ssh_key_unlock = formModel.ssh_key_unlock as string;
        saveCredential.ssh_key_data = formModel.ssh_key_data as string;
        break;
      }
      case 'aws': {
        saveCredential.client = formModel.client as string;
        saveCredential.secret = formModel.secret as string;
        saveCredential.token = formModel.token as string;
        break;
      }
      case 'gce': {
        saveCredential.email = formModel.email as string;
        saveCredential.project = formModel.project as string;
        saveCredential.ssh_key_data = formModel.ssh_key_data as string;
        break;
      }

      default:
    }

    return saveCredential;
  }

  private createForm() {
    this.credentialForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      kind: ['', Validators.required],
      username: [''],
      password: [''],
      become_method: [''],
      organization: ['', TensorValidators.validateOrganization(this.organizationList)],
      vault_password: [''],
      project: [''],
      authorize: [false],
      authorize_password: [''],

      // linux
      become_username: [''],
      become_password: [''],

      // gce
      email: [''],

      // aws
      client: [''],
      secret: [''],
      token: [''],

      ssh_key_unlock: [''],
      ssh_key_data: [''],

      ask_password_on_launch: [false],
      ask_vault_password_on_launch: [false],
      ask_become_password_on_launch: [false],
      ask_ssh_key_unlock_on_launch: [false]
    });

    if (!this.credentialForm) {
      return;
    }

    this.credentialForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));

    this.credentialForm.get('kind').valueChanges.subscribe((kind: string) => {
      if (kind === 'net') {
        this.credentialForm.get('username').setValidators([Validators.required]);
      } else {
        this.credentialForm.get('username').clearValidators();
      }

      if (kind === 'gce') {
        this.credentialForm.get('ssh_key_data').setValidators([Validators.required]);
        this.credentialForm.get('email').setValidators(Validators.compose([Validators.required, Validators.email]));
        this.credentialForm.get('project').setValidators([Validators.required]);
      } else {
        this.credentialForm.get('ssh_key_data').clearValidators();
        this.credentialForm.get('email').clearValidators();
        this.credentialForm.get('project').clearValidators();
      }

      if (kind === 'aws') {
        this.credentialForm.get('client').setValidators([Validators.required]);
        this.credentialForm.get('secret').setValidators([Validators.required]);
      } else {
        this.credentialForm.get('client').clearValidators();
        this.credentialForm.get('secret').clearValidators();
      }

      this.credentialForm.updateValueAndValidity();
    });

    this.credentialForm.get('ssh_key_data').valueChanges.subscribe((data: string) => {
      if (data.length > 0) {
        this.credentialForm.get('ssh_key_unlock').enable();
      } else {
        this.credentialForm.get('ssh_key_unlock').disable();
      }
    });

    this.onValueChanged();
  }

  private onValueChanged(data?: any) {
    if (!this.credentialForm) {
      return;
    }

    const form = this.credentialForm;
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
