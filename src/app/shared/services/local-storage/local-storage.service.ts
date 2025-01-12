import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private accessToken = 'access_token';
  private refreshToken = 'refresh_token';

  setAccessToken(token: string): void {
    localStorage.setItem(this.accessToken, token);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshToken, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessToken);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshToken);
  }

  removeAccessToken(): void {
    localStorage.removeItem(this.accessToken);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.refreshToken);
  }
}
