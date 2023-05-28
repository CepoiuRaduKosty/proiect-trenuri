import { Component , inject, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from '../services/fireauth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bilet } from '../tipuri';
import { FirestoreDbService } from '../services/firestoredb.service';
import { LinieTabel } from '../tipuri';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-page-reservations',
  templateUrl: './page-reservations.component.html',
  styleUrls: ['./page-reservations.component.css']
})
export class PageReservationsComponent {
  private svcAuth = inject(FireAuthService);
  private router = inject(Router);
  private snackbar = inject(MatSnackBar);
  private svcDb = inject(FirestoreDbService);
  rezervariRecente: Bilet[] = [];
  liniiTabelRecente: LinieTabel[] = [];
  rezervariNerecente: Bilet[] = [];
  liniiTabelNerecente: LinieTabel[] = [];
  afisBileteVechi: boolean = false;
  fetchuitNerecenteDeja = false;

  displayedColumns: string[] = ['start', 'end', 'tren', 'dataPlecare'];
  dataSourceRecente = new MatTableDataSource<LinieTabel>();
  dataSourceNerecente = new MatTableDataSource<LinieTabel>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  async getBileteRecente(){
    if(this.svcAuth.user != null){
      this.rezervariRecente = await this.svcDb.getUserBileteRecente(this.svcAuth.user.uid);
      let trasee = await this.svcDb.getTrasee();
      this.rezervariRecente.forEach((bilet) => {
        let traseu = trasee.find((traseu) => traseu.id == bilet.traseuId)!;
        let tmp: LinieTabel = {
          dataPlecare: bilet.date.toDate(),
          start: traseu.start,
          end: traseu.end,
          tren: traseu.tren
        };
        tmp.dataPlecare.setHours(traseu.oraPlecare, traseu.minutPlecare);
        this.liniiTabelRecente.push(tmp);
      });
      this.dataSourceRecente = new MatTableDataSource<LinieTabel>(this.liniiTabelRecente);
      if(this.paginator != null){
        this.dataSourceRecente.paginator = this.paginator;
      }
    }
    else
      console.log("offf au of of au");
  }

  @ViewChild(MatPaginator) paginator2: MatPaginator | undefined;
  async getBileteNerecente(){
    if(this.fetchuitNerecenteDeja == false)
    {
      if(this.svcAuth.user != null){
        this.rezervariNerecente = await this.svcDb.getUserBileteNerecente(this.svcAuth.user.uid);
        let trasee = await this.svcDb.getTrasee();
        this.rezervariNerecente.forEach((bilet) => {
          let traseu = trasee.find((traseu) => traseu.id == bilet.traseuId)!;
          let tmp: LinieTabel = {
            dataPlecare: bilet.date.toDate(),
            start: traseu.start,
            end: traseu.end,
            tren: traseu.tren
          };
          tmp.dataPlecare.setHours(traseu.oraPlecare, traseu.minutPlecare);
          this.liniiTabelNerecente.push(tmp);
        });
        this.dataSourceNerecente = new MatTableDataSource<LinieTabel>(this.liniiTabelNerecente);
        if(this.paginator2 != null){
          this.dataSourceNerecente.paginator = this.paginator2;
        }
      }
      else
        console.log("offf au of of au");
      this.fetchuitNerecenteDeja = true;
    }
  }

  constructor(){
    if(this.svcAuth.user == null){
      this.snackbar.open("Trebuie sa te autentifici", "Ok", {
        duration: 3000
      })
      this.router.navigateByUrl('/login');
    }
    else{
      this.getBileteRecente();
    }
  }

}
