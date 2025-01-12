import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router, RouterLink } from '@angular/router';
import { FormButtonComponent } from "../../shared/components/auth/form-button/form-button.component";
import { GoogleSignButtonComponent } from "../../shared/components/auth/google-sign-button/google-sign-button.component";
import { AuthService } from '../../shared/services/api/auth/auth.service';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlingService } from '../../shared/services/error-handling/error-handling.service';
import { LoginRequest } from './models/LoginRequest';
import { LoginResponse } from './models/LoginResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    MatCheckboxModule,
    FormsModule,
    RouterLink,
    CommonModule,
    FormButtonComponent,
    GoogleSignButtonComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginRequest: LoginRequest = {
    email: '',
    password: ''
  };

  passwordVisible: boolean = false;
  rememberMe: boolean = false;
  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,30}$/;

  authService = inject(AuthService);
  localStorage = inject(LocalStorageService);
  router = inject(Router);
  toastr = inject(ToastrService);
  errorHandler = inject(ErrorHandlingService);

  onLoginSubmit(): void {
    this.authService.login(this.loginRequest).subscribe({
      next: (response: LoginResponse) => {
        this.localStorage.setAccessToken(response.accessToken);
        this.localStorage.setRefreshToken(response.refreshToken);

        // TODO: Redirect to home page
      },
      error: (error: HttpErrorResponse) => {
        this.errorHandler.handleHttpError(error);
      }
    })
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
  }
}
