import { Component, inject } from '@angular/core';
import { FireAuthService } from '../services/fireauth.service';
import { NgModel } from '@angular/forms';
import { DialogSignupSuccessComponent } from '../dialog-signup-success/dialog-signup-success.component';
import { MatDialog } from '@angular/material/dialog';
import { DiagSignupFailComponent } from '../diag-signup-fail/diag-signup-fail.component';

@Component({
  selector: 'app-page-signup',
  templateUrl: './page-signup.component.html',
  styleUrls: ['./page-signup.component.css']
})
export class PageSignupComponent {
  private svcAuth: FireAuthService = inject(FireAuthService);
  private dialog: MatDialog = inject(MatDialog);
  username: string = "";
  password: string = "";

  async clickSignup(){
    this.svcAuth.signUp(this.username, this.password)
      .then(() => {
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
}
