import { Component } from '@angular/core';
import { PageListResultComponent } from '../page-list-result/page-list-result.component';
import { Traseu, TraseuSearchQuery } from '../tipuri';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  traseeFetched: Array<Traseu> = [
    {
      id: 1,
      start: 'sibiu',
      end: 'jina',
      tren: 'ir333',
      dataPlecare: new Date("2023-05-16T20:30:00.000Z"),
      dataSosire: new Date("2023-05-16T20:30:00.000Z")
    },
    {
      id: 2,
      start: 'jina',
      end: 'sibiu',
      tren: 'ir444',
      dataPlecare: new Date("2023-05-17T20:30:00.000Z"),
      dataSosire: new Date("2023-05-17T20:30:00.000Z")
    },
    {
      id: 3,
      start: 'bucuresti',
      end: 'ploiesti',
      tren: 'ir987',
      dataPlecare: new Date("2023-05-18T20:30:00.000Z"),
      dataSosire: new Date("2023-05-18T20:30:00.000Z")
    }
  ];
  fetchedTable = false;
  trasee: Array<Traseu> = [];

  submitHandler(event: any){
    let query: TraseuSearchQuery = event as TraseuSearchQuery;
    this.trasee = this.traseeFetched.filter((elem) => {
      let passed = true;
      if(query.start != null && elem.start.toUpperCase() != query.start.toUpperCase() ) passed = false;
      if(query.end != null && elem.end.toUpperCase()  != query.end.toUpperCase() ) passed = false;
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
