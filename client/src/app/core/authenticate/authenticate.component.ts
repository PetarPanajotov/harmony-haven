import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.checkIfUserHasSession()
  };
};
