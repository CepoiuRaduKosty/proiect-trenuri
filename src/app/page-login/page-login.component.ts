import { Component, inject } from '@angular/core';
import { FireAuthService } from '../services/fireauth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginSuccessComponent } from '../dialog-login-success/dialog-login-success.component';
import { DialogLoginFailComponent } from '../dialog-login-fail/dialog-login-fail.component';
import { FirestoreDbService } from '../services/firestoredb.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
  private svcAuth = inject(FireAuthService);
  private dialog: MatDialog = inject(MatDialog);
  private svcDb: FirestoreDbService = inject(FirestoreDbService);
  email: string = "";
  password: string = "";

  async clickLogin(){
    this.svcAuth.signIn(this.email, this.password)
      .then(() => {
          let dialogRef = this.dialog.open(DialogLoginSuccessComponent);
          dialogRef.afterClosed().subscribe(result => {
            this.email = "";
            this.password = "";
            });
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
}
