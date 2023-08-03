import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  };
  
  logout():void {
    this.userService.logout()
  };
};
