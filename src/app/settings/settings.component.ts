import { Component } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';

@Component({
  selector: 'settings-cmp',
  templateUrl: 'settings.component.html',
})

export class SettingsComponent {

  constructor(private breadcrumbService: BreadcrumbService) {
    console.log('hello form `settings` component');
    breadcrumbService.addFriendlyNameForRoute('/settings', 'Settings');
    breadcrumbService.addFriendlyNameForRoute('/settings/users', 'Users');
    breadcrumbService.addFriendlyNameForRoute('/settings/users/add', 'Create User');

    breadcrumbService.addFriendlyNameForRoute('/settings/organizations', 'Organizations');
    breadcrumbService.addFriendlyNameForRoute('/settings/organizations/add', 'Create');
    breadcrumbService.addFriendlyNameForRoute('/settings/teams', 'Teams');
  }
}
