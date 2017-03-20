import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CredentialsService } from "../../../services/credentials.service";
import { OrganizationService } from "../../../services/organization.service";
import { Organization } from "../../../models/organization";
import { Credential } from "../../../models/credential";
import { CredentialsType } from "../../../models/credentials-type";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";

@Component({
    selector: 'credentials-add',
    templateUrl: './credentials-add.component.html',
    providers: [CredentialsService, OrganizationService]
})
export class CredentialsAddComponent implements OnInit {
    model: any
    organizations: Organization[];
    organizationList: string[];
    selectedType = "default";
    credentials = new Credential();
    validForm = false;
    hasTypeError = false;
    hasOrganizationError = false;
    organization: string;

    constructor(private credentialsService: CredentialsService,
        private organizationService: OrganizationService) {
    }

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .map(term => {
                if (term.length < 2) {
                    return []
                }
                else {
                    term = term.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
                    return this.organizations.filter(v => new RegExp(term, 'gi').test(v.name)).splice(0, 10);
                }
            });

    formatter = (x: { name: string }) => x.name;

    ngOnInit(): void {
        console.log('hello `CredentialsAdd` component');
        this.getOrganizations();
    }

    getOrganizations(): void {
        this.organizationService.getOrganizations()
            .subscribe(res => {
                this.organizationList = [];
                this.organizations = res
                for (let organization of this.organizations) {
                    this.organizationList.push(organization.name);
                }
            },
            err => {
                console.log(err);
            });
    }

    addCredentials(): void {
        if (this.model) {
            this.credentials.id = this.model.id
        }
    }

    onTypeChange(credentialType) {
        this.selectedType = credentialType;
        if (credentialType == 'default') {
            this.hasTypeError = true;
        }
        else {
            this.hasTypeError = false;
        }
        this.validateForm();
    }

    onNotify(message: CredentialsType): void {
        this.credentials.password = message.password;
        this.credentials.ssh_key_data = message.ssh_key_data;
    }

    /**
     * ---- Valid form states ---
     * Name + Machine
     * Name + Network + Network Username
     * Name + Source control
     * Name + AWS + Access key + Secret key
     * Name + Rackspace + Username + API key
     * Name + VMware vCenter + vCenter Host + Username + password
     * Name + Red Hat Stellite + Satellite 6 host + Username + password
     * Name + Red Hat CloudForms + CloudForms host + username + password
     */

    validateForm() {
        console.log(this.credentials.type)
        if (this.validateName(this.credentials.name) && this.validateType(this.selectedType)) {
            if (this.validateOrganization()) {
                this.validForm = true;
            }
            else {
                this.validForm = false;
            }
        }
        else {
            this.validForm = false;
        }
    }

    /**
     * Check for valid names. Names are valid only if it is not empty, not null
     * and does not contain spaces
     */
    validateName(name) {
        if (this.checkSpaces(name))
            return false;
        else
            return true;
    }

    /**
     * Check for valid Types. Default is invalid type and other
     * types are valid.
     */
    validateType(type: string): boolean {
        if (type == 'default')
            return false;
        else
            return true;
    }

    /**
     * Check for empty or strings with spaces.
     */
    checkSpaces(text: string): boolean {
        return /\s/g.test(text) || text == '';
    }

    /**
     * Check for valid organization selections
     */
    validateOrganization() {
        if ((this.model && this.model.name && this.organizationList.includes(this.model.name)) || this.model == '' || this.organizationList.includes(this.model)) {
            console.log('true');
            this.hasOrganizationError = false;
            return true;
        }
        else {
            console.log("false");
            this.hasOrganizationError = true;
            return false;
        }
    }
} 