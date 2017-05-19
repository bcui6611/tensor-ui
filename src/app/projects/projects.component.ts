import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { EventBusService } from '../services/event-bus.service';
import { URLSearchParams } from '@angular/http';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
  selector: 'projects-cmp',
  templateUrl: './projects.component.html',
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public isAdd: boolean;
  public rows: any[] = [];
  public columns: any[] = [
    {title: 'Name', name: 'name', sort: 'asc', link: true},
    {title: 'Kind', name: 'kind', sort: '', text: true},
    {title: 'Type', name: 'scm_type', sort: '', text: true},
    {title: 'Last Updated', name: 'last_updated', sort: false, text: true},
    {title: 'Actions', name: 'actions', sort: false, actions: true}
  ];
  public config: any = {
    sorting: {columns: this.columns},
  };

  public page: number = 1;
  public itemsPerPage: number = 6;
  public length: number = 0;
  public tags: string[] = [];
  public toggleKey: boolean = false;

  constructor(private projectsService: ProjectService,
              private bus: EventBusService,
              private _notification: NotificationsService) {
  }

  public ngOnInit(): void {
    this.onChangeTable();
    // reload data on route changes
    this.bus.listen('project_modify').subscribe((e) => {
      this.onChangeTable();
    });
  }

  public onChangeTable(): void {
    const params = new URLSearchParams();
    params.set('page_size', this.itemsPerPage.toString());

    if (this.page) {
      params.set('page', this.page.toString());
    }

    for (const tag of this.tags) {
      const item = tag.split(':');
      if (item.length > 1) {
        params.set(item[0] + '__icontains', item[1]);
      } else {
        params.set('name__icontains', tag);
      }
    }

    const columns = this.columns || [];
    for (const c of columns) {
      if (c.sort === 'asc') {
        params.set('order_by', c.name);
      } else if (c.sort === 'desc') {
        params.set('order_by', '-' + c.name);
      }
    }

    this.projectsService.getAll(params).subscribe((res) => {
        this.length = res.count;
        this.rows = res.data;
      },
      (err) => {
        console.log(err);
      });
  }

  public getData(row: any, path: string): string {
    return path.split('.').reduce((prev: any, curr: string) => prev && prev[curr], row);
  }

  public onDelete(data: Project): void {
    this.projectsService.delete(data.id).subscribe((dres) => {
      this.projectsService.getAll().subscribe((res) => {
        this.length = res.count;
        this.rows = res.data;
        this._notification.success('Success', data.name + ' deleted');
      }, (err) => {
        this._notification.error('Error', 'Unable to delete');
      });
    });
  }

  public onUpdate(): void {
    console.log('update clicked');
  }

  public toggleKeys(): void {
    this.toggleKey = !this.toggleKey;
  }
}
