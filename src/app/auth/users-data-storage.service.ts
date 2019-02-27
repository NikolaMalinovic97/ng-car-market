import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataStorageService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    // returns all users from firebase, gets them via firebase
  }

  getLogedinUser(mail: string) {
    const users = this.getAllUsers();
    // iterats through all users, and returns the one with macthing email
  }

  storeNewUser(newUser: User) {
    this.httpClient.post('https://ng-car-market.firebaseio.com/users.json', newUser)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
