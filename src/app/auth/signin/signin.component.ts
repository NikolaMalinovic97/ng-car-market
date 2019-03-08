import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersDataStorageService } from '../users-data-storage.service';
import { SignedUserService } from '../signed-user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userDataStorage: UsersDataStorageService,
               private signedUserService: SignedUserService) {}

  ngOnInit() {
    this.userDataStorage.getAllUsers();
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.signedUserService.onSignin(email, password);
  }
}
