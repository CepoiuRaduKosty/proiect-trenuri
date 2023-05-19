import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { FirebaseAuthError } from '../tipuri';

@Injectable({
    providedIn: 'root',
  })
export class FireAuthService {
    private auth: Auth = inject(Auth);
    private user?: User;

    errorCode: string = '0';
    errorMessage: string = "";

    async signIn(email: string, password: string){
        signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            this.user = userCredential.user;
            this.errorCode = '0';
            this.errorMessage = "";
            
        })
        .catch((error) => {
            let authError = error as FirebaseAuthError;
            this.errorCode = authError.code;
            this.errorMessage = authError.message;
        })
    }
}