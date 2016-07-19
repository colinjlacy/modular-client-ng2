/**
 * Created by colinjlacy on 7/16/16.
 */
import { ClientConfigConstructor } from './internals';
import { StarterRoutes, SecondRoutes } from './modules'

export const ClientConfig = new ClientConfigConstructor({
    appName: 'Modular Client',
    rootRoute: 'Second',
    routes: [
        ...StarterRoutes,
        ...SecondRoutes
    ]
});
