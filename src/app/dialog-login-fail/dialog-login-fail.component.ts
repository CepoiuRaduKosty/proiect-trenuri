import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type DialogData = {
  errorCode: string,
  errorMessage: string
}

@Component({
  selector: 'app-dialog-login-fail',
  templateUrl: './dialog-login-fail.component.html',
  styleUrls: ['./dialog-login-fail.component.css']
})
export class DialogLoginFailComponent {
  reason: string = "";
  constructor(
    public dialogRef: MatDialogRef<DialogLoginFailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    switch(data.errorCode){
      case("auth/user-disabled"):
        this.reason = "User disabled";
        break;
      case("auth/invalid-email"):
        this.reason = "Invalid email";
        break;
      case("auth/user-not-found"):
        this.reason = "User not found";
        break;
      case("auth/wrong-password"):
        this.reason = "Wrong password";
        break;
      default:
        this.reason = data.errorCode;
        break;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
