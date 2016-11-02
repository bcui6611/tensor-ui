import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'inventories-home',
    templateUrl: 'inventories-home.component.html',
    encapsulation: ViewEncapsulation.None
})

export class InventoriesHomeComponent implements OnInit {
    
    constructor(private router: Router){ }
    ngOnInit() {
        console.log('hello from `InventoriesHome` component');
    }
}
