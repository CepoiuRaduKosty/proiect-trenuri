import { Component } from '@angular/core';
import { PageListResultComponent } from '../page-list-result/page-list-result.component';
import { Traseu, TraseuSearchQuery } from '../tipuri';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  traseeFetched: Array<Traseu> = [];
  fetchedTable = false;
  trasee: Array<Traseu> = [];

  DEBUG_query: TraseuSearchQuery = {};

  private fetchTrasee(){
    
  }

  submitHandler(event: any){
    this.fetchTrasee();

    let query: TraseuSearchQuery = event as TraseuSearchQuery;

    this.DEBUG_query = query;

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
