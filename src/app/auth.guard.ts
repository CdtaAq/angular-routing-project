import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = false; // pretend user is not logged in
    if (!isLoggedIn) {
      alert('Access Denied. Redirecting to Home.');
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
