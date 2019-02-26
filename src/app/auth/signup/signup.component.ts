import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const mail = form.value.email;
    const password = form.value.password;
    const username = form.value.username;
    const phone = form.value.phone;
    console.log(mail + ' ' + password + ' ' + username + ' ' + phone);
    // Insert User authentication code here <--
  }
}
