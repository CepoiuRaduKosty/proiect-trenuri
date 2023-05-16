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
  end?: string

  dataPlecareMin?: Date;
  dataPlecareMax?: Date;
  dataSosireMin?: Date;
  dataSosireMax?: Date;

  oraPlecareMin?: string;
  oraPlecareMax?: string;
  oraSosireMin?: string;
  oraSosireMax?: string;

  private addHoursMinutesToDate(date: Date, hoursMinutes: string){
    let hours: number = Number(hoursMinutes.split(':')[0]);
    let minutes: number = Number(hoursMinutes.split(':')[1]);
    date.setDate(date.getTime()+hours*60*60*1000+minutes*60*1000);
  }

  onSend(event: any){
    let tempQuery: TraseuSearchQuery = {};
    tempQuery.start=this.start;
    tempQuery.end = this.end;
    
    if(this.dataPlecareMin && this.oraPlecareMin)
      this.addHoursMinutesToDate(this.dataPlecareMin, this.oraPlecareMin)
    if(this.dataPlecareMax && this.oraPlecareMax)
      this.addHoursMinutesToDate(this.dataPlecareMax, this.oraPlecareMax)
    if(this.dataSosireMin && this.oraSosireMin)
      this.addHoursMinutesToDate(this.dataSosireMin, this.oraSosireMin)
    if(this.dataSosireMax && this.oraSosireMax)
      this.addHoursMinutesToDate(this.dataSosireMax, this.oraSosireMax)

    tempQuery.dataPlecareMax = this.dataPlecareMax;
    tempQuery.dataPlecareMin = this.dataPlecareMin;
    tempQuery.dataSosireMax = this.dataSosireMax;
    tempQuery.dataSosireMin = this.dataSosireMin;
    this.submitted.emit(tempQuery);

    this.start = undefined;
    this.end = undefined;
    this.dataPlecareMin = undefined;
    this.dataPlecareMax = undefined;
    this.dataSosireMax = undefined;
    this.dataSosireMin = undefined;
    this.oraPlecareMax = undefined;
    this.oraPlecareMin = undefined;
    this.oraSosireMax = undefined;
    this.oraSosireMin = undefined;
  }
}
