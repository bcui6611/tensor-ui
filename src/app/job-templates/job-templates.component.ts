import { Component, ViewEncapsulation } from "@angular/core";
import { BreadcrumbService } from "../shared/breadcrumb/breadcrumb.service";
import { Router } from "@angular/router";

@Component({
  selector: 'job-template',
  templateUrl: './job-templates.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [BreadcrumbService]
})
export class JobTemplatesComponent {
  constructor(private breadcrumbService: BreadcrumbService, private router: Router) {
    console.log('hello form `Job Template` component');

    breadcrumbService.addFriendlyNameForRoute('/job_templates', 'Job Templates');
    breadcrumbService.addFriendlyNameForRoute('/job_templates/add', 'Create Job Template');
  }
}
