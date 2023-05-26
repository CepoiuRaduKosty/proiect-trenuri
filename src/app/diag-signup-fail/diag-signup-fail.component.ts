import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export type DialogData = {
  errorCode: string,
  errorMessage: string
}

@Component({
  selector: 'app-diag-signup-fail',
  templateUrl: './diag-signup-fail.component.html',
  styleUrls: ['./diag-signup-fail.component.css']
})
export class DiagSignupFailComponent {
  reason: string = "";
  constructor(
    public dialogRef: MatDialogRef<DiagSignupFailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    switch(data.errorCode){
      case("auth/email-already-in-use"):
        this.reason = "Email already registered";
        break;
      case("auth/invalid-email"):
        this.reason = "Invalid email";
        break;
      case("auth/operation-not-allowed"):
        this.reason = "Operation not allowed";
        break;
      case("auth/weak-password"):
        this.reason = "Password too weak";
        break;
      default:
        this.reason = "Unknown error";
        break;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
