import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'teams-cmp',
    templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
    ngOnInit(): void {
        console.log('hello `Teams` component');
    }
}