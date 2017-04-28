import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-table',
  template: './ng-table.component.html'
})
export class NgTableComponent {
  // Table values
  @Input() public rows: any[] = [];
  @Input() public config: any = {};

  // Outputs (Events)
  @Output() public tableChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  public set columns(values: any[]) {
    values.forEach((value: any) => {
      const column = this._columns.find((col: any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }

  public get columns(): any[] {
    return this._columns;
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

  private _columns: any[] = [];

  public onChangeTable(column: any): void {
    this._columns.forEach((col: any) => {
      if (col.name !== column.name) {
        col.sort = '';
      }
    });
    this.tableChanged.emit({sorting: this.configColumns});
  }

  public getData(row: any, propertyName: string): string {
    return propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row);
  }
}
