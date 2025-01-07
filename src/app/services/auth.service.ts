import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiBaseUrl = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginPayload = { email, password };

    return this.httpClient.post<any>(`${this.apiBaseUrl}/login`, loginPayload);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  refreshAccessToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();

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
