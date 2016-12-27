import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
    selector: 'organizations-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './organizations-add.component.html'
})
export class OrganizationsAddComponent implements OnInit{
    ngOnInit() {
        console.log('hello `OrganizationAdd` component');
    }
}