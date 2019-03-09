import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { UsersDataStorageService } from './users-data-storage.service';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SignedUserService {

  private signedUser: User = null;
  userChanged = new Subject<User>();

  constructor(private usersDataStorage: UsersDataStorageService) { }

  authenticateUser(email: string, password: string) {
    const user = this.usersDataStorage.getUserByMail(email);
    if (user != null) {
      this.checkPassword(password, user);
    }
    this.userChanged.next(this.signedUser);
  }

  private checkPassword(password: string, user: User) {
    if (password !== user.getPassword()) {
      this.signedUser = null;
    } else {
      this.signedUser = user;
    }
  }

  isUserSigned() {
    if (this.signedUser == null) {
      return false;
    } else {
      return true;
    }
  }

  getSignedUser() {
    return this.signedUser;
  }

}
