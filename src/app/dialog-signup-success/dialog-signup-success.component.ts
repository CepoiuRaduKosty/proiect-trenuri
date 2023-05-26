import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-signup-success',
  templateUrl: './dialog-signup-success.component.html',
  styleUrls: ['./dialog-signup-success.component.css']
})
export class DialogSignupSuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogSignupSuccessComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
