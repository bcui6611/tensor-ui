import { Component, OnInit } from '@angular/core';
import { TableData } from './table-data';

@Component({
  selector: 'jobs-table',
  templateUrl: './jobs-table.component.html'
})
export class JobsTableComponent implements OnInit {
  public rows: any[] = [];
  public columns: any[] = [
    {title: 'ID', name: 'id', sort: 'asc', text: true},
    {title: 'Name', name: 'name', sort: '', link: true},
    {title: 'Type', name: 'type', sort: '', text: true},
    {title: 'Finished', name: 'finished', sort: '', text: true},
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
    filtering: {filterString: '', columnName: 'name'},
    className: ['table-striped', 'table-bordered']
  };

  private data: any[] = TableData;

  public constructor() {
    this.length = this.data.length;
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

  public setPage() {
    this.onChangeTable(this.config);
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

    // let sorting = this.configColumns;

    if (this.config.filtering) {
      Object.assign(this.config.filtering, this.config.filtering);
    }
    if (this.config.sorting) {
      Object.assign(this.config.sorting, this.config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = this.page && this.config.paging ? this.changePage(sortedData) : sortedData;
    this.length = sortedData.length;

  }

  public changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    return data.filter((item: any) =>
      item[config.filtering.columnName.toLowerCase()]
        .match(new RegExp(this.config.filtering.filterString)));
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let c of columns) {
      if (c.sort !== '' && c.sort !== false) {
        columnName = c.name;
        sort = c.sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public getData(row: any, propertyName: string): string {
    return propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row);
  }

  // Username click
  public usernameClick(): void {
    alert('usernameClick');
  }

  public userDeleteClick(row): void {
    alert('delete');
  }

  public userEditClick(row): void {
    // username attribute is can be return in following way
    alert('User Edit Click at ->' + row.username);
  }

  public ngOnInit(): void {
    console.log('hello `ProjectsTable` component');

    this.onChangeTable(this.config);
  }
}
