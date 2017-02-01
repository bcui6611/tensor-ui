import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsAddComponent } from '../projects-add/projects-add.component';

@Component({
    selector: 'project-home-cmp',
    templateUrl: './projects-home.component.html'
})
export class ProjectsHomeComponent implements OnInit{
    private path: Subscription;
    private isAdd: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        console.log('hello `Project` Component');

        this.path = this._route.data.subscribe(data => {
            this.isAdd = data['addProject'];
        })
    }
}