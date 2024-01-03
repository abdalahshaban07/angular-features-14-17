import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Injectable, Provider, } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('from class', req);
        return next.handle(req);
    }
}

export const loggerProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggerInterceptor,
    multi: true

}


export const loggerInterceptorFN: HttpInterceptorFn = (req, next) => {
    console.log('from Fn', req);
    return next(req);
}

export const loggerInterceptorFNWithPassData = (value: string): HttpInterceptorFn => {

    return (req, next) => {
        console.log('data passed', value);
        return next(req);
    }
}