import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'job-summary-cmp',
    templateUrl: './job-summary.component.html'
})
export class JobSummaryComponent implements OnInit{

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit(): void {
        console.log('hello `Job Summary` Component');
    }
}