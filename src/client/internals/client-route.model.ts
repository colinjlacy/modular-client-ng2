/**
 * Created by colinjlacy on 7/16/16.
 */
import { RouterConfig } from '@angular/router';

export interface ClientRouteConfig extends RouterConfig {
    baseNav?: boolean,
    appRoot?: boolean
}
