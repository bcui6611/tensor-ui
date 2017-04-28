import { Component, OnInit } from '@angular/core';
import { OrganizationData } from './table-data';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'organizations',
  templateUrl: 'organizations.component.html',
})

export class OrganizationsComponent implements OnInit {
  public rows: any[] = [];
  public columns: any[] = [
    {title: 'Name', name: 'name', sort: 'asc', link: true},
    {title: 'Description', name: 'description', sort: '', link: true},
    {title: 'Actions', name: 'actions', sort: false, actions: true}
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'name'}
  };

  public isAdd: boolean;

  private data: any[] = OrganizationData;
  private routerSub: Subscription;
  private path: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.length = this.data.length;
  }

  public ngOnInit() {
    console.log('hello `Organizations` component');

    this.routerSub = this.route.params.subscribe((params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      // this.service.getHero(id).then(hero => this.hero = hero);
    });
    this.path = this.route.data.subscribe((data) => {
      this.isAdd = data['addOrganization'];
    });

    this.onChangeTable(this.config);
  }

  public get configColumns(): any {
    let sortColumns: any[] = [];

    this.columns.forEach((column: any) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  public changePage(data: any[] = this.data): any[] {
    let start = (this.page - 1) * this.itemsPerPage;
    let end = this.itemsPerPage > -1 ? (start + this.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public onChangeTable(column: any): void {
    this.columns.forEach((col: any) => {
      if (col.name !== column.name && col.sort !== false) {
        col.sort = '';
      }
    });

    if (this.config.filtering) {
      Object.assign(this.config.filtering, this.config.filtering);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    this.rows = this.page && this.config.paging ? this.changePage(filteredData) : filteredData;
    this.length = filteredData.length;

  }

  public changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    let filter: string = this.config.filtering.filterString.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
    return data.filter((item: any) =>
      new RegExp(filter, 'gi').test(item[config.filtering.columnName]));
  }

  public getData(row: any, propertyName: string): string {
    return propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row);
  }

  // Username click
  public usernameClick(): void {
    alert('sfsdfs');
  }

  public userDeleteClick(): void {
    alert('delete');
  }

  public userEditClick(): void {
    alert('sfsdfs');
  }
}
