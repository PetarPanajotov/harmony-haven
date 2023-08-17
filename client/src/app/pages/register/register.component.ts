import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ValidatorService } from 'src/app/core/services/validator.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    profileForm = new FormGroup({
        email: new FormControl('', [Validators.required, this.validatorService.customEmailValidator()]),
        firstName: new FormControl('', [Validators.required, this.validatorService.customFirstNameValidator()]),
        lastName: new FormControl('', [Validators.required, this.validatorService.customLastNameValidator()]),
        password: new FormControl('', [Validators.minLength(5)]),
        repeatPassword: new FormControl('', [this.validatorService.matchPasswordValidator('password')])
    });
    constructor(
        private userService: UserService,
        private router: Router,
        private validatorService: ValidatorService
    ) {}

    register(): void {
        if(this.profileForm.invalid) {
            return
        };
        const {
            email,
            firstName,
            lastName,
            password,
            repeatPassword
        } = this.profileForm.value;
        console.log(email)
        this.userService.register(email!, firstName!, lastName!, password!, repeatPassword!)
            .subscribe(() => this.router.navigate(['/']));
    };
};
