import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ClientHeaderComponent } from './core-components/client-header.component';

@Component({
    moduleId: module.id,
    selector: 'client-root',
    templateUrl: 'client.component.html',
    styleUrls: ['client.component.css'],
    directives: [ClientHeaderComponent, ROUTER_DIRECTIVES]
})
export class ClientComponent {
    title = 'client works!';
}
