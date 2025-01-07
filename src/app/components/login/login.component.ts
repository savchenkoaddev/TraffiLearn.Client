import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    MatCheckboxModule,
    FormsModule,
    RouterLink,
    CommonModule
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
