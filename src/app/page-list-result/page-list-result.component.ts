import { Component, Input, inject } from '@angular/core';
import { Traseu } from '../tipuri';
import { FireAuthService } from '../services/fireauth.service';
import { Router } from '@angular/router';
import { DiagBiletComponent } from '../diag-bilet/diag-bilet.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogBiletNouserComponent } from '../dialog-bilet-nouser/dialog-bilet-nouser.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-page-list-result',
  templateUrl: './page-list-result.component.html',
  styleUrls: ['./page-list-result.component.css']
})
export class PageListResultComponent {
  private svcAuth = inject(FireAuthService);
  private svcRouter = inject(Router);
  private dialog: MatDialog = inject(MatDialog);
  @Input() fetchedData: Array<Traseu> = [];

  clickCumparaBilet(traseu: Traseu){
    if(this.svcAuth.user != null){
      let dialogRef = this.dialog.open(DiagBiletComponent, {
        data: {
          traseuId: traseu.id
        }
      });
    }
    else{
      let dialogRef = this.dialog.open(DialogBiletNouserComponent);
      dialogRef.afterClosed().subscribe(result => {
          this.svcRouter.navigateByUrl("/login");
        });
      
    }
  }
}
