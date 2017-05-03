import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../services/organization.service';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { Organization } from '../../models/organization';
import { EventBusService } from '../../services/event-bus.service';
import { URLSearchParams } from '@angular/http';
import { NotificationsService } from 'angular2-notifications/dist';

@Component({
  selector: 'organizations',
  templateUrl: 'organizations.component.html',
  providers: [OrganizationService]
})

export class OrganizationsComponent implements OnInit {
  public isAdd: boolean;
  public rows: Organization[] = [];

  public page: number = 1;
  public itemsPerPage: number = 6;
  public length: number = 0;
  public tags: string[] = [];
  public toggleKey: boolean = false;

  constructor(private breadcrumbService: BreadcrumbService, private organizationService: OrganizationService,
              private bus: EventBusService,
              private _notification: NotificationsService) {
  }

  public ngOnInit(): void {
    this.breadcrumbService.addFriendlyNameForRoute('/settings', 'Settings');
    this.breadcrumbService.addFriendlyNameForRoute('/settings/organizations', 'Organizations');

    this.onChangeTable();

    // reload data on route changes
    this.bus.listen('organization_modify').subscribe((e) => {
      this.onChangeTable();
    });
  }

  public onChangeTable() {
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

    this.organizationService.getAll(params).subscribe((res) => {
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

  public onDelete(data: Organization): void {
    this.organizationService.delete(data.id).subscribe((dres) => {
      this.organizationService.getAll().subscribe((res) => {
        this.length = res.count;
        this.rows = res.data;
        this.onChangeTable();
      });
      this._notification.success('Success', data.name + ' deleted');
    }, (err) => {
      this._notification.error('Error', 'Unable to delete');
    });
  }

  public toggleKeys(): void {
    this.toggleKey = !this.toggleKey;
  }
}
