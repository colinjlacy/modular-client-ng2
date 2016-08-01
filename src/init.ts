import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { ClientComponent, ClientConfig, ClientRoute, ClientRouteConfig } from './client';

let dependencies = [];

if (ClientConfig.routes.length) {
    if(ClientConfig.rootRoute) {
        let index: number = 0;

        ClientConfig.routes.forEach((x: ClientRoute, i: number) => {
            if(x.routeName === ClientConfig.rootRoute) {
                index = i;
            }
        });

        ClientConfig.routes[index].path = '';
    }
    dependencies.push(provideRouter(ClientConfig.routes));
}

bootstrap(ClientComponent, dependencies);

