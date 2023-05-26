import { Component } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-login-success',
  templateUrl: './dialog-login-success.component.html',
  styleUrls: ['./dialog-login-success.component.css']
})
export class DialogLoginSuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogLoginSuccessComponent>,
    public router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/list');
  }
}
