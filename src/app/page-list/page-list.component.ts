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

  async submitHandler(event: any){
    this.traseeFetched = await this.firestoreDbService.getTrasee();
    let query: TraseuSearchQuery = event as TraseuSearchQuery;

    this.trasee = this.traseeFetched.filter((elem) => {
      let passed = true;
      if(query.start != null && elem.start.trim().toUpperCase() != query.start.trim().toUpperCase() ) passed = false;
      if(query.end != null && elem.end.trim().toUpperCase()  != query.end.trim().toUpperCase() ) passed = false;
      let _dataPlecare = new Date(elem.dataPlecare);
      let _dataSosire = new Date(elem.dataSosire);
      if(query.dataPlecareMin != null && _dataPlecare.valueOf() < query.dataPlecareMin.valueOf()) passed = false;
      if(query.dataPlecareMax != null && _dataPlecare.valueOf() > query.dataPlecareMax.valueOf()) passed = false;
      if(query.dataSosireMin != null && _dataSosire.valueOf() < query.dataSosireMin.valueOf()) passed = false;
      if(query.dataSosireMax != null && _dataSosire.valueOf()> query.dataSosireMax.valueOf()) passed = false;
      return passed;
    });
    this.fetchedTable = true;
  }
}
