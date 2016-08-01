/**
 * Created by colinjlacy on 7/16/16.
 */
import { ClientRouteConfig } from '../../client/internals';
import { SecondComponent } from './second-module.component';

export const SecondRoutes: ClientRouteConfig = [
    {routeName: 'Second', path: 'second', component: SecondComponent}
];
