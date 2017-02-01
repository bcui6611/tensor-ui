import { Component, ViewEncapsulation } from "@angular/core";
import { BreadcrumbService } from "../shared/breadcrumb/breadcrumb.service";
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
