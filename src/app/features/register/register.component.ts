import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormButtonComponent } from "../../shared/components/auth/form-button/form-button.component";
import { GoogleSignButtonComponent } from "../../shared/components/auth/google-sign-button/google-sign-button.component";
import { AuthService } from '../../shared/services/api/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlingService } from '../../shared/services/error-handling/error-handling.service';
import { RegisterRequest } from './models/RegisterRequest';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    FormButtonComponent,
    GoogleSignButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {
    username: '',
    email: '',
    password: ''
  };

  confirmPassword: string = '';
  passwordVisible: boolean = false;
  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,30}$/;

  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  errorHandler = inject(ErrorHandlingService);

  onRegisterSubmit() : void {
    this.authService.register(this.registerRequest).subscribe(
      {
        next: () => {
          this.toastr.success('Ви успішно зареєструвались.', 'Успіх');
          this.router.navigateByUrl('/login');

          // TODO: Redirect to confirm email page
        },
        error: (error: HttpErrorResponse) => {
          this.errorHandler.handleHttpError(error);
        }
      }
    );
  }

  togglePasswordVisibility() : void {
    this.passwordVisible = !this.passwordVisible;
  }

  isConfirmPasswordCorrect() : boolean {
    return this.registerRequest.password == this.confirmPassword;
  }
}
