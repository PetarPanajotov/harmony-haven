import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    profileForm = new FormGroup({
        email: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        password: new FormControl(''),
        repeatPassword: new FormControl('')
    });
    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    register(): void {
        const {
            email,
            firstName,
            lastName,
            password,
            repeatPassword
        } = this.profileForm.value;
        this.userService.register(email!, firstName!, lastName!, password!, repeatPassword!)
            .subscribe(() => this.router.navigate(['/']));
    };
};
