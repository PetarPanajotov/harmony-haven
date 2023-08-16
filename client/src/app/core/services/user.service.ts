import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  };

  get userInformation(): any {
    return this.user
  }

  constructor(
    private http: HttpClient,
    private router: Router) { }

  checkIfUserHasSession(): any {
    return this.http.get<User>('http://localhost:3000/me')
      .subscribe({
        next: (user) => this.user = user,
        error: (error) => console.log(error.error)
      })
  }

  register(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    repeatPassword: string
  ) {
    return this.http.post<User>('http://localhost:3000/register', {
      email,
      firstName,
      lastName,
      password,
      repeatPassword
    })
  };

  login(
    email: string,
    password: string
  ) {
    return this.http.post<User>('http://localhost:3000/login', {
      email,
      password
    }).subscribe((user) => {
      this.user = user
      this.router.navigate(['/'])
    })
  };

  logout() {
    return this.http.post('http://localhost:3000/logout', {})
      .subscribe(() => {
        this.user = undefined;
        this.router.navigate(['/'])
      })
  }

};
