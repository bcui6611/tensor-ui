import { Component, ViewEncapsulation } from "@angular/core";
import { BreadcrumbService } from "../shared/breadcrumb/breadcrumb.service";
import { Router } from '@angular/router';

@Component({
    selector: 'settings-cmp',
    templateUrl: 'settings.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [BreadcrumbService]
})

export class SettingsComponent {

    constructor(private breadcrumbService: BreadcrumbService, private router: Router) {
        console.log('hello form `settings` component');

        breadcrumbService.addFriendlyNameForRoute('/settings', 'Settings');
        breadcrumbService.addFriendlyNameForRoute('/settings/users', 'Users');
        breadcrumbService.addFriendlyNameForRoute('/settings/users/add', 'Create User');

        breadcrumbService.addFriendlyNameForRoute('/settings/organizations', 'Organizations');
        breadcrumbService.addFriendlyNameForRoute('/settings/organizations/add', 'Create Organization');
    }
}
