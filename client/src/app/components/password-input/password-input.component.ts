import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  passwordIconShow = faEye;
  passwordIconHide = faEyeSlash;
  showPassword: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
