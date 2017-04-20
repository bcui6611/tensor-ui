import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@Component({
    selector: 'settings-cmp',
    templateUrl: 'settings.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SettingsComponent {

    constructor(private breadcrumbService: BreadcrumbService, private router: Router) {
        console.log('hello form `settings` component');

        breadcrumbService.addFriendlyNameForRoute('/settings', 'Settings');
        breadcrumbService.addFriendlyNameForRoute('/settings/users', 'Users');
        breadcrumbService.addFriendlyNameForRoute('/settings/users/add', 'Create User');

        breadcrumbService.addFriendlyNameForRoute('/settings/organizations', 'Organizations');
        breadcrumbService.addFriendlyNameForRoute('/settings/organizations/add',
            'Create Organization');
        breadcrumbService.addFriendlyNameForRoute('/settings/credentials', 'Credentials');
        breadcrumbService.addFriendlyNameForRoute('/settings/credentials/add',
            'Create Credentials');
        breadcrumbService.addFriendlyNameForRoute('/settings/teams', 'Teams');
    }
}
