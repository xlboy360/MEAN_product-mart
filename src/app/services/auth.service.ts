import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from '../components/user';

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

  logout() {
    // Remove user from subject
    this.setUser(null);
    console.log('User did logout successfully');
  }

  getUser() {
    return this.user$.asObservable();
  }

  register(user: User) {
    this.setUser(user);
    console.log(`Register ${user.fullName} successfully`);
    return of(user);
  }

  private setUser(user: any) {
    this.user$.next(user);
  }
}
