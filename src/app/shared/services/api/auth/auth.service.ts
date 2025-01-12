import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { LoginRequest } from '../../../../features/login/models/LoginRequest';
import { RegisterRequest } from '../../../../features/register/models/RegisterRequest';
import { LoginResponse } from '../../../../features/login/models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiBaseUrl = 'http://localhost:5000/api';

  httpClient = inject(HttpClient);
  localStorage = inject(LocalStorageService);

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiBaseUrl}/login`, loginRequest);
  }

  register(registerRequest: RegisterRequest): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}/register`, registerRequest);
  }

  logout(): void {
    this.localStorage.removeAccessToken();
    this.localStorage.removeRefreshToken();
  }

  refreshAccessToken(): Observable<any> {
    const refreshToken = this.localStorage.getRefreshToken();

    if (!refreshToken) {
      throw new Error('No refresh token found');
    }

    const refreshPayload = { refreshToken };

    return this.httpClient.post<any>(`${this.apiBaseUrl}/refresh`, refreshPayload).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
