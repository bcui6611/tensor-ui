import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'job-template-tbl',
    templateUrl: './job-templates.component.html'
})
export class JobTemplateTable implements OnInit {
    ngOnInit() {
        console.log('Hello from `JobTemplateTable` component')
    }
}