import { Component } from '@angular/core';
import { TraseuSearchQuery } from '../tipuri';
import { DatePipe } from '@angular/common'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-list-form',
  templateUrl: './page-list-form.component.html',
  styleUrls: ['./page-list-form.component.css']
})
export class PageListFormComponent {
  @Output() submitted = new EventEmitter<TraseuSearchQuery>;

  wantsAdvancedSearch = false;

  start?: string;
  end?: string;
  dataPlecare?: Date;
  oraPlecare?: string;

  private addHoursMinutesToDate(date: Date, hoursMinutes: string){
    let hours: number = Number(hoursMinutes.split(':')[0]);
    let minutes: number = Number(hoursMinutes.split(':')[1]);
    date.setHours(date.getHours() + hours);
    date.setMinutes(date.getMinutes() + minutes);
  }

  onSend(event: any){
    let tempQuery: TraseuSearchQuery = {};
    tempQuery.start=this.start;
    tempQuery.end = this.end;
    
    if(this.dataPlecare && this.oraPlecare)
      this.addHoursMinutesToDate(this.dataPlecare, this.oraPlecare)

    tempQuery.dataPlecare = this.dataPlecare;

    this.submitted.emit(tempQuery);

    this.start = undefined;
    this.end = undefined;
    this.dataPlecare = undefined;
    this.oraPlecare = undefined;
  }
}
