import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirestoreDbService } from '../services/firestoredb.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FireAuthService } from '../services/fireauth.service';

type DialogData = {
  traseuId: number
}

@Component({
  selector: 'app-diag-bilet',
  templateUrl: './diag-bilet.component.html',
  styleUrls: ['./diag-bilet.component.css']
})
export class DiagBiletComponent {
  svcDb: FirestoreDbService = inject(FirestoreDbService);
  snackbar: MatSnackBar = inject(MatSnackBar);
  svcAuth: FireAuthService = inject(FireAuthService);
  dataCalatorie?: Date
  schedule: boolean[] = [];
  todayDate = new Date();

  filter = (date: Date | null): boolean => {return true;};
  constructor(
    public dialogRef: MatDialogRef<DiagBiletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.getSchedule();
  }

  async getSchedule(){
    this.schedule = await this.svcDb.getTraseuSchedule(this.data.traseuId);
    let sch = this.schedule;
    
    this.filter = (date: Date | null): boolean => {
      console.log("loll" , sch);
      if(date == null) return false;
      return sch[(date.getDay()+6)%7];
    }
  }

  async onConfirm(){
    if(this.dataCalatorie != null){
      let nrZiua = (this.dataCalatorie.getDay()+6)%7;
      let eCumparat = false;
      if(this.svcAuth.user != null)
        eCumparat = await this.svcDb.isBiletCumparat(this.svcAuth.user.uid, this.data.traseuId, this.dataCalatorie)
      if(eCumparat == false){
        if(this.schedule[nrZiua] == true){
          if(this.svcAuth.user != null)
            this.svcDb.userAddBilet(this.svcAuth.user.uid, this.data.traseuId, this.dataCalatorie);
          else console.log("wtf bro");
          this.snackbar.open("Bilet cumparat!", "Ok", {
            duration: 3000
          })
          this.dialogRef.close();
        }
        else{
          this.snackbar.open("Zi indisponibila, vezi tabelul", "Ok", {
            duration: 3000
          })
        }
      }
      else{
        this.snackbar.open("Bilet deja cumparat pentru ziua selectata", "Ok", {
          duration: 3000
        })
      }
    }
    else{
      this.snackbar.open("Trebuie specificata ziua calatoriei", "Ok", {
        duration: 3000
      })
    }   
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
