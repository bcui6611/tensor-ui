import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavModule } from '../shared/topnav/topnav.module';
import { ProjectsComponent } from './projects.component';
import { GitComponent  } from './scm-types/git/git.component'
import {  } from './projects-table';

@NgModule({
    imports: [
        TopNavModule,
        RouterModule
    ],
    declarations: [
        GitComponent,
        ProjectsComponent
    ],
    exports: [],
})
export class ProjectsModule {}