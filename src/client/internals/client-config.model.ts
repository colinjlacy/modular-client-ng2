/**
 * Created by colinjlacy on 7/16/16.
 */
import { ClientRouteConfig } from './client-route.model';

export interface ClientConfigModel {
    appName: String,
    routes?: ClientRouteConfig
    version?: String
}

export class ClientConfigConstructor implements ClientConfigModel {
    public appName;
    public routes;
    public version;
    constructor(confObj) {
        Object.keys(confObj).forEach((key:string): void => {
            this[key] = confObj[key];
        });
        return this;
    }
}
