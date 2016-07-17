/**
 * Created by colinjlacy on 7/16/16.
 */
import { Route } from '@angular/router';

export interface ClientRoute extends Route {
    routeName: String,
    baseNav?: boolean,
    appRoot?: boolean
}

export declare type ClientRouteConfig = ClientRoute[];
