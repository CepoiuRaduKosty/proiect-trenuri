import { Component, Input, inject, ViewChild } from '@angular/core';
import { Traseu } from '../tipuri';
import { FireAuthService } from '../services/fireauth.service';
import { Router } from '@angular/router';
import { DiagBiletComponent } from '../diag-bilet/diag-bilet.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogBiletNouserComponent } from '../dialog-bilet-nouser/dialog-bilet-nouser.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
  displayedColumns: string[] = ['start', 'end', 'tren', 'zileValabil', 'ora', 'btn'];
  dataSource = new MatTableDataSource<Traseu>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Traseu>(this.fetchedData);
    console.log(this.dataSource);
    console.log(this.fetchedData);
    if(this.paginator != null){
      this.dataSource.paginator = this.paginator;
    }
  }

  calcZileValabil(traseu: Traseu): string{
    let s:string = "";
    if(traseu.zileValabil[0]) s+= "L ";
    if(traseu.zileValabil[1]) s+= "Ma ";
    if(traseu.zileValabil[2]) s+= "Mi ";
    if(traseu.zileValabil[3]) s+= "J ";
    if(traseu.zileValabil[4]) s+= "V ";
    if(traseu.zileValabil[5]) s+= "S ";
    if(traseu.zileValabil[6]) s+= "D ";
    return s;
  }
  
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
