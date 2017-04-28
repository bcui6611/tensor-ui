import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Credential } from '../models/credential';
import { CredentialService } from '../services/credential.service';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'credentials-cmp',
  templateUrl: './credentials.component.html',
  providers: [CredentialService]
})
export class CredentialsComponent {
  public isAdd: boolean;
  public rows: any[] = [];
  public columns: any[] = [
    {title: 'Name', name: 'name', sort: 'asc', link: true},
    {title: 'Description', name: 'description', sort: '', text: true},
    {title: 'Type', name: 'kind', sort: false, text: true},
    {title: 'Owners', name: 'owners', sort: false, link: true},
    {title: 'Actions', name: 'actions', sort: false, actions: true}
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;
  public config: any = {
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'name'}
  };

  private data: Credential[];

  constructor(private breadcrumbService: BreadcrumbService, private credentialsService: CredentialService,
              private router: Router, private bus: EventBusService) {
    breadcrumbService.addFriendlyNameForRoute('/settings', 'Settings');
    breadcrumbService.addFriendlyNameForRoute('/settings/credentials', 'Credentials');

    this.credentialsService.getAll().subscribe((res) => {
        this.length = res.length;
        this.data = res;
        this.onChangeTable(this.config);
      },
      (err) => {
        console.log(err);
      });

    // reload data on route changes
    bus.listen('organization_modify').subscribe((e) => {
      this.credentialsService.getAll().subscribe((res) => {
          this.length = res.length;
          this.data = res;
          this.onChangeTable(this.config);
        },
        (err) => {
          console.log(err);
        });
    });
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
    this.rows = this.page ? this.changePage(sortedData) : sortedData;
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

  public getUrl(row: any): string {
    return '/settings/credentials/' + ('name'.split('.').reduce((prev: any, curr: string) => prev[curr], row));
  }

  public onDelete($data: Credential): void {
    this.credentialsService.delete($data.id).subscribe((dres) => {
      this.credentialsService.getAll().subscribe((res) => {
          this.length = res.length;
          this.data = res;
          this.onChangeTable(this.config);
        },
        (err) => {
          console.log(err);
        });
    });
  }
}
