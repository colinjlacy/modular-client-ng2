/**
 * Created by colinjlacy on 7/16/16.
 */
import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';

import { ClientConfig } from '../client-config';

@Component({
    selector: 'client-header',
    template: `
    <header>
        <nav class='navbar navbar-sticky-top navbar-dark bg-inverse'>
            <span class='navbar-brand'>{{appName}}</span>
            <ul class='nav navbar-nav pull-xs-right' *ngIf='showNav'>
                <li class='nav-item' *ngFor='let route of routes'>
                    <a class='nav-link'
                       [routerLink]="['/' + route.path]"
                       routerLinkActive="active">{{route.routeName}}</a>
                </li>
            </ul>
        </nav>
    </header>
    `,
    directives: [NgIf, NgFor, ROUTER_DIRECTIVES]
})
export class ClientHeaderComponent {
    public appName: String;
    public routes: String;
    public showNav: boolean;

    constructor(private router: Router) {
        this.appName = ClientConfig.appName;
        this.routes = ClientConfig.routes.sort((a, b) => a.routeName > b.routeName);
        this.showNav = !!this.routes && this.routes.length > 1;
    }

}
