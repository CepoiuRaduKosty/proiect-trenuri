import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root',
  })
export class FireAuthService {
    private auth: Auth = inject(Auth);
}