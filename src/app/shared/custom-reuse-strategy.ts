import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CustomReuseStrategy implements RouteReuseStrategy {
    private storedRoutes = new Map<string, DetachedRouteHandle>();
    private paths:string[] = [':id','users','']
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return this.paths.indexOf(route.routeConfig.path) != -1;
    }
    store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
        this.storedRoutes.set(route.routeConfig.path, detachedTree);
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig.path);;
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.storedRoutes.get(route.routeConfig.path);
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

}