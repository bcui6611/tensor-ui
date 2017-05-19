import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CredentialService } from '../services/credential.service';
import { Credential } from '../models/credential.model';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'credential-select',
  template: require('./credential-select.component.html'),
  providers: [CredentialService]
})
export class CredentialSelectComponent implements OnInit {

  @Input() public kind: string;

  public rows: any[] = [];
  public columns: any[] = [
    {title: 'Name', name: 'name', sort: '', text: true}
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

  private data: Credential[];
  private model: Credential;

  constructor(public activeModal: NgbActiveModal, public credentialService: CredentialService) {
  }

  public get configColumns(): any {
    const sortColumns: any[] = [];

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

    const start = (this.page - 1) * this.itemsPerPage;
    const end = this.itemsPerPage > -1 ? (start + this.itemsPerPage) : data.length;
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

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
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

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (const c of columns) {
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

  public selected($event): void {
    this.model = this.data.find((x) => x.id === $event.target.value);
  }

  public close(): void {
    this.activeModal.close(this.model);
  }

  public ngOnInit(): void {
    console.log('hello `CredentialSelect` component');
    const params = new URLSearchParams();
    params.set('kind', this.kind);

    this.credentialService.getAll(params).subscribe((res) => {
        this.data = res.data;
        this.length = res.count;
        this.onChangeTable(this.config);
      },
      (err) => {
        console.log(err);
      });
  }
}
