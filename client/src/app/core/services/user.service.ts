import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/users';
import { tap } from 'rxjs';
import { api } from 'src/app/shared/constants';

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

  constructor(private http: HttpClient) { }

  checkIfUserHasSession(): any {
    return this.http.get<User>(api + `me`)
      .subscribe({
        next: (user) => this.user = user,
        error: (error) => console.log(error.error)
      });
  };

  register(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    repeatPassword: string
  ) {
    return this.http.post<User>(api + `register`, {
      email,
      firstName,
      lastName,
      password,
      repeatPassword
    }).pipe(tap((user) => {
      this.user = user
    }))
  };

  login(
    email: string,
    password: string
  ) {
    return this.http.post<User>(api + `login`, {
      email,
      password
    }).pipe(tap((user) => {
      this.user = user
    }));
  }

  logout() {
    return this.http.post(api + `logout`, {})
      .pipe(tap(() => {
        this.user = undefined;
      }));
  };
};
