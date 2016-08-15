import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

export class ModelResolve implements Resolve<Promise<string>> {
    constructor() {}

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Promise<string> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('For science...you monster');
            }, 5000);
        });
    }
}

export class EssentialsResolve implements Resolve<Promise<string>> {
    constructor() {}

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Promise<string> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('For data...you creep');
            }, 5000);
        });
    }
}
