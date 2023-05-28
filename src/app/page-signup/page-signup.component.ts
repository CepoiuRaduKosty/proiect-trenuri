import { Component, inject } from '@angular/core';
import { FireAuthService } from '../services/fireauth.service';
import { NgModel } from '@angular/forms';
import { DialogSignupSuccessComponent } from '../dialog-signup-success/dialog-signup-success.component';
import { MatDialog } from '@angular/material/dialog';
import { DiagSignupFailComponent } from '../diag-signup-fail/diag-signup-fail.component';
import { FirestoreDbService } from '../services/firestoredb.service';
@Component({
  selector: 'app-page-signup',
  templateUrl: './page-signup.component.html',
  styleUrls: ['./page-signup.component.css']
})
export class PageSignupComponent {
  private svcAuth: FireAuthService = inject(FireAuthService);
  private dialog: MatDialog = inject(MatDialog);
  private svcDb: FirestoreDbService = inject(FirestoreDbService);
  username: string = "";
  password: string = "";

  respWidth = 600;
  colnumber: string = "2";
  lowWidth = false;

  async clickSignup(){
    this.svcAuth.signUp(this.username, this.password)
      .then(() => {
          if(this.svcAuth.user != null)
            this.svcDb.userInitBilete(this.svcAuth.user.uid);
          else console.log("ERROR NO USER FOUND WHEN OPERATION SUCCESSFULL");
          let dialogRef = this.dialog.open(DialogSignupSuccessComponent);
          dialogRef.afterClosed().subscribe(result => {
            this.username = "";
            this.password = "";
            });
      })
      .catch((error) => {
        let dialogRef = this.dialog.open(DiagSignupFailComponent, {
          data: {
            errorCode: this.svcAuth.errorCode,
            errorMsg: this.svcAuth.errorMessage
          }
        });
          dialogRef.afterClosed().subscribe(result => {
            this.username = "";
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
