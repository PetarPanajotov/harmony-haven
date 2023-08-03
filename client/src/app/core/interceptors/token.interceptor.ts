import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone ({
      withCredentials: true
    });
    return next.handle(request);
  };
};
export const tokenInterceptorProvider: Provider = {
  multi: true,
  useClass: TokenInterceptor,
  provide: HTTP_INTERCEPTORS
}
