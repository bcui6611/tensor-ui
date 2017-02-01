import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'jobs-home-cmp',
    templateUrl: './jobs-home.component.html'
})
export class JobsHomeComponent implements OnInit{

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        console.log('hello `Project` Component');
    }
}