import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { ClientComponent, ClientConfig } from './client';

let dependencies = [];

if (ClientConfig.routes.length) {
    dependencies.push(provideRouter(ClientConfig.routes));
}

bootstrap(ClientComponent, dependencies);

