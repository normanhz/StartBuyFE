import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router,
    public storage: Storage,) { }

    async canActivate(route: ActivatedRouteSnapshot) {
      return this.storage.get('userAuth').then((data) => {
        if (!data) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      });
    }
}
