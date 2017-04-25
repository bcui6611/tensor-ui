import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialService } from '../../../services/credential.service';
import { OrganizationService } from '../../../services/organization.service';
import { Organization } from '../../../models/organization';
import { Credential } from '../../../models/credential';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'credentials-add',
  templateUrl: './credentials-add.component.html',
  providers: [CredentialService, OrganizationService]
})
export class CredentialsAddComponent implements OnInit, OnChanges {
  public model: Credential;

  public validForm = false;

  public organizations: Organization[];
  public organizationList: string[] = [];
  public hasOrganizationError = false;

  public credentialForm: FormGroup;

  constructor(private organizationService: OrganizationService,
              private breadcrumbService: BreadcrumbService,
              private credentialService: CredentialService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    breadcrumbService.addFriendlyNameForRoute('/settings/credentials/add', 'Create');
    let name = this.route.params.subscribe((p) => {
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
          this.organizationList = [];
          this.organizations = res;
          for (let organization of this.organizations) {
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

  /**
   * Check for valid organization selections
   */
  public validateOrganization() {
    if ((this.model && this.model.name && this.organizationList.includes(this.model.orgization)) ||
      this.model || this.organizationList.includes(this.model.orgization)) {
      console.log('true');
      this.hasOrganizationError = false;
      return true;
    } else {
      console.log('false');
      this.hasOrganizationError = true;
      return false;
    }
  }

  public ngOnChanges(): void {
    this.credentialForm.reset({
      name: this.model.name,
      description: this.model.description,
      kind: this.model.kind,
      username: this.model.username,
      password: this.model.password,
      ssh_key_data: this.model.ssh_key_data,
      ssh_key_unlock: this.model.ssh_key_unlock,
    });
  }

  private createForm() {
    this.credentialForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      kind: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      ssh_key_data: ['', Validators.required],
      ssh_key_unlock: ['', Validators.required],
    });
  }

}
