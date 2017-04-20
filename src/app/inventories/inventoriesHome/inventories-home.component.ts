import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inventories-home',
  templateUrl: 'inventories-home.component.html',
})

export class InventoriesHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  public ngOnInit() {
    console.log('hello from `InventoriesHome` component');
  }
}
