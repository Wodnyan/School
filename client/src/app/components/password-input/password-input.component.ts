import { Component, Input, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  @Input() form = '';
  @Input() inputName = '';

  passwordIconShow = faEye;
  passwordIconHide = faEyeSlash;
  showPassword: boolean = false;
  lastName = 'lastName';

  constructor() {}

  ngOnInit(): void {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
