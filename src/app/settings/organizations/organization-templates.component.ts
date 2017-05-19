import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { URLSearchParams } from '@angular/http';
import { AnsibleJobTmplService } from '../../services/ansible-jobtmpl.service';
import { OrganizationService } from '../../services/organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'credentials-cmp',
  templateUrl: './organization-templates.component.html',
  providers: [AnsibleJobTmplService]
})
export class OrganizationTemplatesComponent implements OnInit,  OnDestroy {
  public isAdd: boolean;
  public rows: any[] = [];
  public columns: any[] = [
    {title: 'Name', name: 'name', sort: 'asc', link: true},
    {title: 'Description', name: 'description', sort: '', text: true},
    {title: 'Activity', name: 'activity', sort: false, text: true},
    {title: 'Labels', name: 'labels', sort: false, text: true},
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

  private sub: any;
  private id: string;

  constructor(private breadcrumbService: BreadcrumbService,
              private route: ActivatedRoute,
              private ansibleService: AnsibleJobTmplService,
              private organizationService: OrganizationService) {
  }

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe((p) => {
      this.id = p['id'];
      if (this.id) {
        this.organizationService.get(this.id).subscribe((res) => {
            this.breadcrumbService.addFriendlyNameForRouteRegex('^/settings/organizations/[a-f\\d]{24}$', res.name);
            this.breadcrumbService.
            addFriendlyNameForRouteRegex('^/settings/organizations/[a-f\\d]{24}/ansible_job_templates', 'Ansible Job Templates');
            this.breadcrumbService.
            addFriendlyNameForRouteRegex('^/settings/organizations/[a-f\\d]{24}/terraform_job_templates', 'Terraform Job Templates');
          },
          (err) => {
            console.log(err);
          });
      }
    });

    this.onChangeTable();
  }

  public onChangeTable(): void {
    const params = new URLSearchParams();
    params.set('organization', this.id);

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

    this.ansibleService.getAll(params).subscribe((res) => {
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

  public toggleKeys(): void {
    this.toggleKey = !this.toggleKey;
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
