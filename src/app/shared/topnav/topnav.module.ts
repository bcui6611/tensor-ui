import { NgModule } from '@angular/core';
import { TopNavComponent } from './topnav.component';
import { RouterModule } from '@angular/router'

@NgModule({
    imports: [RouterModule],
    declarations: [ TopNavComponent],
    exports: [TopNavComponent]
})
export class TopNavModule { }