import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router'
import { JobTemplatesAddComponent } from '../job-templates-add/job-templates-add.component';


@Component({
    selector: 'job-template-home',
    templateUrl: './job-template-home.component.html'
})
export class JobTemplateHomeComponent implements OnInit{
    private path: Subscription;
    private isAdd: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        console.log('hello from `Job Template Home` component');

        this.path = this._route.data.subscribe(data => {
            this.isAdd = data['addTemplate'];
        })
    }
}