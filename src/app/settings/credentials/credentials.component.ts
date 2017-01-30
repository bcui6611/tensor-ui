import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialsAddComponent } from './credentials-add/credentials-add.component'

@Component({
    selector: 'credentials-cmp',
    templateUrl: './credentials.component.html',
})
export class CredentialsComponent implements OnInit {
    private routerSub: Subscription;
    private path: Subscription;
    isAdd: boolean;

    constructor(
        private _route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        console.log('hello `Credentials` Component');

        this.path = this._route.data.subscribe(data => {
            this.isAdd = data['addCredentials'];
        });
    }
}