import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddComponent } from './usersAdd/user-add.component';
import { CommonModule } from '@angular/common'

@Component({
    selector: 'users-cmp',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    private routerSub: Subscription;
    private path: Subscription;

    isAdd: boolean;

    constructor(
        private _route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        console.log('hello `User` component');
        this.routerSub = this._route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            // this.service.getHero(id).then(hero => this.hero = hero);
        });
        this.path = this._route.data.subscribe(data => {
            this.isAdd = data['addUser']
        });
    }
}