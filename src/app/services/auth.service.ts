import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Creating user structure
  private user$ = new Subject<User>();

  constructor() {}

  login(email: string, password: string) {
    return of({ email, password });
  }

  logOut() {
    // Clean up subject
    this.setUser(null);
    console.log('User logged out');
  }

  get user() {
    return this.user$.asObservable();
  }

  register(user: any) {
    // Make a API call to save user in DB
    this.setUser(user);
    console.log(user + ' registered successfully');
    return of(user);
  }

  private setUser(user: any) {
    this.user$.next(user);
  }
}
