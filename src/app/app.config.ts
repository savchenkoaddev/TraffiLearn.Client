import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { accessTokenInterceptor } from './shared/interceptors/access-token/access-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideToastr({
      closeButton: true,
      timeOut: 4000,
      extendedTimeOut: 2000,
      easing: 'ease-in',
      progressBar: true,
      progressAnimation: 'increasing',
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([accessTokenInterceptor])),
    ]
};
