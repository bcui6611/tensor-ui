import { Component, OnInit } from "@angular/core";
import { TableData } from "./table-data";

@Component({
    selector: 'credentials-table',
    templateUrl: './credentials-table.component.html',
})
export class CredentialsTableComponent implements OnInit {

    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'Name', name: 'username', sort: 'asc', type: 'link' },
        { title: 'Description', name: 'firstname', sort: '', type: 'text' },
        { title: 'Type', name: 'lastname', sort: '', type: 'text' },
        { title: 'Owners', name: 'lastname', sort: '', type: 'link' },
        { title: 'Actions', name: 'actions', sort: false, type: 'actions' }
    ];
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;


    private data: Array<any> = TableData;
    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '', columnName: 'username' }
    };

    public constructor() {
        this.length = this.data.length;
    }

    public get configColumns(): any {
        let sortColumns: Array<any> = [];

        this.columns.forEach((column: any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });

        return { columns: sortColumns };
    }


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
            item[config.filtering.columnName.toLowerCase()].match(new RegExp(this.config.filtering.filterString)));
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

    // Username click
    public usernameClick(): void {
        alert('sfsdfs');
    }

    public userDeleteClick(): void {
        alert('sfsdfs');
    }

    public userEditClick(): void {
        alert('sfsdfs');
    }

    ngOnInit(): void {
        console.log('hello `UserTable` component');

        this.onChangeTable(this.config);
    }
}
