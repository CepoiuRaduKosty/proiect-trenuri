import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-signup-success',
  templateUrl: './dialog-signup-success.component.html',
  styleUrls: ['./dialog-signup-success.component.css']
})
export class DialogSignupSuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogSignupSuccessComponent>,
    public router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/list');
  }
}
