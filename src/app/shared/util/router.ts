import { Route } from '@angular/router';

type ActionRouteType = 'A' | 'B' | 'M' | 'I';
interface RouteDataWithRequired {
    code: string;
    action?: ActionRouteType;
}

interface CustomRoute  extends Route {
    data?: RouteDataWithRequired;
}

export type Routes = CustomRoute[];
export interface RouteData {
    code?: string;
    action?: ActionRouteType;
    [name: string]: any;
}
