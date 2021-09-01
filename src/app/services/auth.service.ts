import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

export interface User {
  email: string;
  fullName: string;
  password: string;
}

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

  getUser() { 
    return this.user$.asObservable();
  }

  register(user: any) {
    this.user$.next(user);
    return of(user);
  }
}
