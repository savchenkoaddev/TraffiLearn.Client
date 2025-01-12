import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { inject } from '@angular/core';

export const accessTokenInterceptor: HttpInterceptorFn = (req, next) => {
  let localStorageService = inject(LocalStorageService);

  const accessToken = localStorageService.getAccessToken();
  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return next(req);
};
