import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormButtonComponent } from "../../shared/components/auth/form-button/form-button.component";

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink, FormButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordVisible: boolean = false;
  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,30}$/;

  togglePasswordVisibility() : void {
    this.passwordVisible = !this.passwordVisible;
  }

  isConfirmPasswordCorrect() : boolean {
    return this.password == this.confirmPassword;
  }
}
