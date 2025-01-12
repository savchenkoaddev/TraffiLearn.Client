import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-button',
  imports: [NgClass],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss'
})
export class FormButtonComponent {
  text = input.required<string>();
  disabled = input.required<boolean>();

  getBackgroundClass() {
    return this.disabled() ? 'bg-[#62a2a8]' : 'bg-[#006D77]';
  }
}
