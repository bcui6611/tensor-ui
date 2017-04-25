import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
    selector: 'organizations-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './organizations-edit.component.html'
})
export class OrganizationsEditComponent {
    ngOnInit(): void {
        console.log('hello `OrganizationEdit` component');
    }
}