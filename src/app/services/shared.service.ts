import { Injectable } from '@angular/core';

@Injectable()
export class SharedServies {
    getToken(): string {
        return localStorage.getItem('_tensor_user')
    }
}