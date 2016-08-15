/**
 * Created by colinjlacy on 7/16/16.
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'starter-component',
    template: `
    <h1>Starter</h1>
    `
})
export class StarterComponent {
    constructor(public route:ActivatedRoute) {
        this.route.data.subscribe(val => val['model'].then(res => console.log(res)));
        this.route.data.subscribe(val => val['essentials'].then(res => console.log(res)));
    }
}
