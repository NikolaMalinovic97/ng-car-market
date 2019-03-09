import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { SignedUserService } from '../signed-user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private user: User;

  constructor(private signedUserService: SignedUserService) { }

  ngOnInit() {
    this.user = this.signedUserService.getSignedUser();
  }

}
