import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { User } from '../components/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Creating user structure
  private user$ = new Subject<User>();
  private apiUrl = '/api/auth';

  constructor(private httpClient: HttpClient) {}

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
    // this.setUser(user);
    // console.log(`Register ${user.fullName} successfully`);
    // return of(user);
    return this.httpClient.post(`${this.apiUrl}/register`, user).pipe(
      switchMap((savedUser) => {
        this.setUser(savedUser);
        console.log(`User registered successfully: ${savedUser}`);
        return of(savedUser);
      }),
      catchError((e) => {
        console.error(e);
        return throwError(
          `Registration failed, please contact admin ${e.message}`
        );
      })
    );
  }

  private setUser(user: any) {
    this.user$.next(user);
  }
}
