import { Component } from '@angular/core';

import { ClientHeaderComponent } from './core-components/client-header.component'

@Component({
    moduleId: module.id,
    selector: 'client-root',
    templateUrl: 'client.component.html',
    styleUrls: ['client.component.css'],
    directives: [ClientHeaderComponent]
})
export class ClientComponent {
    title = 'client works!';
}
