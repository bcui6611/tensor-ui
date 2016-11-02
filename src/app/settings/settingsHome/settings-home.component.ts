import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-cmp',
    templateUrl: 'settings-home.component.html'
})

export class SettingsHomeComponent implements OnInit {

    ngOnInit() {
        console.log('hello from `home` component');
    }
}