import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { LoggerInterceptor, loggerInterceptorFN, loggerInterceptorFNWithPassData, loggerProvider } from './interceptor/logger.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    loggerProvider,
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([loggerInterceptorFN, loggerInterceptorFNWithPassData("pass Data")]),
    )
  ]
};
