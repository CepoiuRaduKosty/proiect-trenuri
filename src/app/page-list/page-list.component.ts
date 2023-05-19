import { Component, inject } from '@angular/core';
import { PageListResultComponent } from '../page-list-result/page-list-result.component';
import { Traseu, TraseuSearchQuery } from '../tipuri';
import { FirestoreDbService } from '../services/firestoredb.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  firestoreDbService: FirestoreDbService = inject(FirestoreDbService);
  traseeFetched: Traseu[] = [];
  fetchedTable = false;
  trasee: Traseu[] = [];

  private mondayFirst(dayOfWeek: number): number {
    return (dayOfWeek+6)%7;
  }

  private isDayAvailable(dayOfWeek: number, zileValabil: boolean[]): boolean{
    let dayOfWeekRO = this.mondayFirst(dayOfWeek);
    return zileValabil[dayOfWeekRO];
  }

  async submitHandler(event: any){
    this.traseeFetched = await this.firestoreDbService.getTrasee();
    let query: TraseuSearchQuery = event as TraseuSearchQuery;

    this.trasee = this.traseeFetched.filter((elem) => {
      let passed = true;
      if(query.start != null && elem.start.trim().toUpperCase() != query.start.trim().toUpperCase() ) passed = false;
      if(query.end != null && elem.end.trim().toUpperCase()  != query.end.trim().toUpperCase() ) passed = false;
      if(query.dataPlecare != null && (
        this.isDayAvailable(query.dataPlecare.getDay(), elem.zileValabil) != true ||
        query.dataPlecare.getHours() > elem.oraPlecare ||
        (query.dataPlecare.getHours() == elem.oraPlecare && query.dataPlecare.getMinutes() > elem.minutPlecare)
      )) passed = false;
      return passed;
    });
    this.fetchedTable = true;
  }
}
