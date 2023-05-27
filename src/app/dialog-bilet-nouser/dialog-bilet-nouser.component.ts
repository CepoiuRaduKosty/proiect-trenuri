import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-bilet-nouser',
  templateUrl: './dialog-bilet-nouser.component.html',
  styleUrls: ['./dialog-bilet-nouser.component.css']
})
export class DialogBiletNouserComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogBiletNouserComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
