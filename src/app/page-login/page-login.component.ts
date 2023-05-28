import { Component, inject } from '@angular/core';
import { FireAuthService } from '../services/fireauth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginSuccessComponent } from '../dialog-login-success/dialog-login-success.component';
import { DialogLoginFailComponent } from '../dialog-login-fail/dialog-login-fail.component';
import { FirestoreDbService } from '../services/firestoredb.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
  private svcAuth = inject(FireAuthService);
  private dialog: MatDialog = inject(MatDialog);
  private svcDb: FirestoreDbService = inject(FirestoreDbService);
  private snackbar: MatSnackBar = inject(MatSnackBar);
  private router: Router = inject(Router);
  email: string = "";
  password: string = "";

  respWidth = 600;
  colnumber: string = "2";
  lowWidth = false;

  async clickLogin(){
    this.svcAuth.signIn(this.email, this.password)
      .then(() => {
        this.email = "";
        this.password = "";
        this.snackbar.open("Autentificare realizata cu succes!", "Ok", {
          duration: 3000
        })
        this.router.navigateByUrl('/list');
      })
      .catch((error) => {
        let dialogRef = this.dialog.open(DialogLoginFailComponent, {
          data: {
            errorCode: this.svcAuth.errorCode,
            errorMsg: this.svcAuth.errorMessage
          }
        });
          dialogRef.afterClosed().subscribe(result => {
            this.email = "";
            this.password = "";
          });
      })
  }

  constructor(){
    this.chooseWhenResize();
  }

  chooseWhenResize(){
    if(window.innerWidth > this.respWidth){
      this.colnumber = "2";
      this.lowWidth = false;
    }
    else {
      this.colnumber = "1";
      this.lowWidth = true;
    }
  }

  rightPanelCheck():boolean{
    return this.lowWidth == false;
  }
}
