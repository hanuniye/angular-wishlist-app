import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authServices: AuthService, private router: Router) {}

  login() {
    this.authServices.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.router.navigate(['admin'])
      },
      error: (err: any) => {
        alert(err.message);
      },
    });
  }
}
