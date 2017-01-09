import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamEditComponent } from './teamEdit/team-edit.component';

@Component({
    selector: 'teams-cmp',
    templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
    private routerSub: Subscription;
    private path: Subscription;

    isAdd: boolean;

    constructor(
        private _route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        console.log('hello `Teams` component');
        this.routerSub = this._route.params.subscribe(params => {
            
        });
        this.path = this._route.data.subscribe(data => { 
            this.isAdd = data['addTeam']
        })
    }
}