import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
import { FormButtonComponent } from "../../shared/components/auth/form-button/form-button.component";

@Component({
  selector: 'app-login',
  imports: [
    MatCheckboxModule,
    FormsModule,
    RouterLink,
    CommonModule,
    FormButtonComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  passwordVisible: boolean = false;
  rememberMe: boolean = false;
  email: string = '';
  password: string = '';
  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,30}$/;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleRememberMe() {
    this.rememberMe = !this.rememberMe;
  }
}
