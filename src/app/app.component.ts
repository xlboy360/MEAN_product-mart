import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './user';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  user: User | null | undefined;

  userSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.userSubscription = this.authService.user.subscribe(
      (user) => (this.user = user)
    );
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
