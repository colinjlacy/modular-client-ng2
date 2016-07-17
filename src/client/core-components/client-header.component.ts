/**
 * Created by colinjlacy on 7/16/16.
 */
import { Component } from '@angular/core';

import { ClientConfig } from '../client-config';

@Component({
    selector: 'client-header',
    template: `
    <header>
        <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
            <span class="navbar-brand">{{appName}}</span>
        </nav>
    </header>
    `
})
export class ClientHeaderComponent {
    public appName:String;

    constructor() {
        this.appName = ClientConfig.appName;
    }
}
