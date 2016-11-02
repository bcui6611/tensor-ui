import { CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('calling auth guard');
        return localStorage.getItem('token') === 'test';
    }
}
