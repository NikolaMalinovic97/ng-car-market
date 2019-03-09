import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignedUserService } from '../auth/signed-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userSigned = false;
  private subscription;

  constructor(private signedUserService: SignedUserService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.signedUserService.userChanged.subscribe(
      (user) => {
        this.userSigned = this.signedUserService.isUserSigned();
      }
    );
  }

  onLogout() {
    this.signedUserService.logoutUser();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
