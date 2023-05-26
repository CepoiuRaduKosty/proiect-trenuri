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
  constructor(
    public dialogRef: MatDialogRef<DiagSignupFailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
