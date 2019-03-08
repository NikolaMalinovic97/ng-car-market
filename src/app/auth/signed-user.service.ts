import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { UsersDataStorageService } from './users-data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SignedUserService {

  private signedUser: User = null;

  constructor(private usersDataStorage: UsersDataStorageService) { }

  onSignin(mail: string, password: string) {
    const user = this.usersDataStorage.getUserByMail(mail);
    if (user != null) {
      this.checkPassword(password, user);
    }
  }

  private checkPassword(password: string, user: User) {
    if (password !== user.getPassword()) {
      this.signedUser = null;
    } else {
      this.signedUser = user;
    }
  }

  isUserSigned() {
    if (this.signedUser === null) {
      return false;
    } else {
      return true;
    }
  }

  getSignedUser() {
    return this.signedUser;
  }

}
