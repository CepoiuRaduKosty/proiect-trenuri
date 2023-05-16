import { Component } from '@angular/core';
import { TraseuSearchQuery } from '../tipuri';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-page-list-form',
  templateUrl: './page-list-form.component.html',
  styleUrls: ['./page-list-form.component.css']
})
export class PageListFormComponent {
  wantsAdvancedSearch = false;

  start?: string;
  end?: string

  dataPlecareMin?: Date;
  dataPlecareMax?: Date;
  dataSosireMin?: Date;
  dataSosireMax?: Date;

  oraPlecareMin?: string;
  oraPlecareMax?: string;
  oraSosireMin?: string;
  oraSosireMax?: string;

  onSend(event: any){
    let tempQuery: TraseuSearchQuery = {};
    tempQuery.start=this.start;
    tempQuery.end = this.end;
    

  }
}
