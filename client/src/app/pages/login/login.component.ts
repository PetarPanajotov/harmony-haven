import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ErrorService } from 'src/app/core/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router
  ) { }
  
  login(): void {
    const {
      email,
      password
    } = this.loginForm.value;

    this.userService.login(email!, password!)
      .subscribe({
        next:() => this.router.navigate(['/']),
        error:(error) => {
          this.errorService.setError(error);
          this.loginForm.reset();
          }
      })
  };
};
