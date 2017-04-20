import { Component, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';
import { Router } from '@angular/router';

@Component({
  selector: 'inventories-cmp',
  templateUrl: 'inventories.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [BreadcrumbService]
})

export class InventoriesComponent {
  constructor(private breadcrumbService: BreadcrumbService, private router: Router) {
    console.log('hello form `Inventories` component');

    breadcrumbService.addFriendlyNameForRoute('/inventories', 'Inventories');
    breadcrumbService.addFriendlyNameForRoute('/inventories/add', 'Create Inventory');
  }
}
