import { Component, OnInit } from '@angular/core';
import { UserPermissionsData } from './table-permissions';

@Component({
    selector: 'team-permissions',
    templateUrl: './team-permissions.component.html'
})
export class TeamPermissionsComponent implements OnInit {

    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'Name', name: 'name', sort: 'asc', link: true },
        { title: 'Type', name: 'type', sort: '', text: true },
        { title: 'Role', name: 'role', sort: '', text: true },
        { title: 'Actions', name: 'actions', sort: false, actions: true },
    ];
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public constructor() {
        this.length = this.data.length;
    }

    private data: Array<any> = UserPermissionsData;
    // Table values
    // @Input() public rows: Array<any> = [];
    // @Input() public config: any = {};

    public config: any = {
        paging: true,
        sorting: { columns: this.columns }
    };

    public changePage(data: Array<any> = this.data): Array<any> {
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

        if (this.config.sorting) {
            Object.assign(this.config.sorting, this.config.sorting);
        }

        let sortedData = this.changeSort(this.data, this.config);
        this.rows = this.page && this.config.paging ? this.changePage(sortedData) : sortedData;
        this.length = sortedData.length;

    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
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

    public permissionDelete(): void {
    }

    ngOnInit(): void {
        console.log('hello `TeamPermissions` component');

        this.onChangeTable(this.config);
    }
}
