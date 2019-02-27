import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UsersDataStorageService } from '../users-data-storage.service';
import { User } from 'src/app/shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private usersDataStorage: UsersDataStorageService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const user = this.createUserUsingForm(form);
    this.authService.signupUser(user.getEmail(), user.getPassword());
    this.usersDataStorage.storeNewUser(user);
    this.router.navigate(['']);
  }

  createUserUsingForm(form: NgForm) {
    const mail = form.value.email;
    const password = form.value.password;
    const username = form.value.username;
    const phone = form.value.phone;
    const user = new User(username, mail, password, phone);
    return user;
  }
}
