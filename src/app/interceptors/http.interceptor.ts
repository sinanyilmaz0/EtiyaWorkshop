import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.logRequestTime();

    return next.handle(request);
  }

  logRequestTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    console.log(
      'HTTP Request Sent (' +
        day +
        '.' +
        month +
        '.' +
        year +
        ' - ' +
        hour +
        ':' +
        minute +
        ':' +
        second +
        ')'
    );
  }
}
