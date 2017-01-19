import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'manual-cmp',
    templateUrl: './manual.component.html',
})
export class ManualComponent {
    basePath = "/var/lib/awx/projects"
    isPlaybookAvailable(): boolean {
        return true;
    }
}