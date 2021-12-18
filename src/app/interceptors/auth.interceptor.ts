import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = JSON.parse(localStorage.getItem('token')!);
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token)
    });
    return next.handle(newRequest).pipe(
      catchError((response: any) => {
        if (response.status === 401) {
          // Do something here
          if (response.code == 0) {
            console.log("code 0")
          }
        }
        return throwError(response);
      })
    );
  }
}
