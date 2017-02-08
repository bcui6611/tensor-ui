import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialsService } from '../../../services/credentials.service';
import { OrganizationService } from '../../../services/organization.service';
import { Organization } from '../../../models/organization';
import { Credentials } from '../../../models/credentials';
import { CredentialsType } from '../../../models/credentials-type'

@Component({
    selector: 'credentials-add',
    templateUrl: './credentials-add.component.html',
    providers: [CredentialsService, OrganizationService]
})
export class CredentialsAddComponent implements OnInit {
    model: any
    organizations: Organization[];
    organizationList: string[];
    selectedType = "n";

    constructor (
        private credentialsService: CredentialsService,
        private organizationService: OrganizationService
    ) {}

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term.length < 2 ? []
                : this.organizationList.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));
    
    ngOnInit(): void {
        console.log('hello `CredentialsAdd` component');
        this.getOrganizations()
    }

    getOrganizations(): void {
        this.organizationService.getOrganizations()
        .subscribe(res => {
            this.organizationList = [];
            this.organizations = res
            for(let organization of this.organizations) {
                this.organizationList.push(organization.name);
            }
        },
        err => {
            console.log(err);
        });
    }

    onChange(credentialType) {
        console.log(credentialType);
        this.selectedType = credentialType;
    }

    onNotify(message: CredentialsType): void {
        console.log(message);
    }
}