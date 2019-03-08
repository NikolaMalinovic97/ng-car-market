import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataStorageService {

  users: User[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    fetch('https://ng-car-market.firebaseio.com/users.json')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        for (const user of Object.values(users)) {
          this.addUser(user);
        }
      });
  }

  private addUser(user: Object) {
    const username = user['username'];
    const email = user['email'];
    const password = user['password'];
    const phone = user['phone'];
    const newUser = new User(username, email, password, phone);
    this.users.push(newUser);
  }

  getUserByMail(mail: string) {
    for (const user of this.users) {
      if (user.getEmail() === mail) {
        return user;
      }
    }
    return null;
  }

  storeNewUser(newUser: User) {
    this.httpClient.post('https://ng-car-market.firebaseio.com/users.json', newUser)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
