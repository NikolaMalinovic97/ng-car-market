import { Component, OnInit } from '@angular/core';
import { SignedUserService } from '../auth/signed-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userSigned = false;

  constructor(private signedUserService: SignedUserService) { }

  ngOnInit() {
    this.signedUserService.userChanged.subscribe(
      (user) => {
        this.userSigned = this.signedUserService.isUserSigned();
      }
    );
  }

  onLogout() {
    // <- insert code for loging out user
  }
}
