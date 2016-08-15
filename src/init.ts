import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { ClientComponent, ClientConfig, ClientRoute, ClientRouteConfig,
    ModelResolve, EssentialsResolve } from './client';

let dependencies = [];

if (ClientConfig.routes.length) {

    dependencies.push(ModelResolve);
    dependencies.push(EssentialsResolve);

    if(ClientConfig.rootRoute) {
        let index: number = 0;

        ClientConfig.routes.forEach((x: ClientRoute, i: number) => {
            x.resolve = x.resolve || {};
            x.resolve['model'] = ModelResolve;
            x.resolve['essentials'] = EssentialsResolve;
            if(x.routeName === ClientConfig.rootRoute) {
                index = i;
            }
        });

        ClientConfig.routes[index].path = '';
    }
    dependencies.push(provideRouter(ClientConfig.routes));
}

bootstrap(ClientComponent, dependencies);

