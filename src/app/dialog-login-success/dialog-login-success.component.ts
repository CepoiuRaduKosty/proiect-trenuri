import { Component } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-login-success',
  templateUrl: './dialog-login-success.component.html',
  styleUrls: ['./dialog-login-success.component.css']
})
export class DialogLoginSuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogLoginSuccessComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
