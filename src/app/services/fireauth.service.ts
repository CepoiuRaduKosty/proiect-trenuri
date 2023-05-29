import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User, createUserWithEmailAndPassword, UserCredential, signOut } from '@angular/fire/auth';
import { FirebaseAuthError } from '../tipuri';

@Injectable({
    providedIn: 'root',
  })
export class FireAuthService {
    private auth: Auth = inject(Auth);
    user?: User;

    errorCode: string = '0';
    errorMessage: string = "";

    async signIn(email: string, password: string){
        let userCredential = await signInWithEmailAndPassword(this.auth, email, password)
        .catch((error) => {
            let authError = error as FirebaseAuthError;
            this.errorCode = authError.code;
            this.errorMessage = authError.message;
            throw error;
        })
        if(userCredential != null){
            this.user = userCredential.user;
            this.errorCode = '0';
            this.errorMessage = "";
            
        }
    }

    async signUp(email: string, password: string){
        let userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
            .catch((error) => {
                let authError = error as FirebaseAuthError;
                this.errorCode = authError.code;
                this.errorMessage = authError.message;
                throw error
            });
        if(userCredential != null){
            this.user = userCredential.user;
            this.errorCode = '0';
            this.errorMessage = "";

        }
    }

    isSignedIn(): boolean{
        return this.auth.currentUser != null;
    }

    async signOutUser(){
        await signOut(this.auth);
        this.user=undefined;
    }
}