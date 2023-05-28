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

  respWidth = 600;
  colnumber: string = "2";
  lowWidth = false;

  constructor(){
    this.chooseWhenResize()
  }

  chooseWhenResize(){
    if(window.innerWidth > this.respWidth){
      this.colnumber = "2";
      this.lowWidth = false;
    }
    else {
      this.colnumber = "1";
      this.lowWidth = true;
    }
  }

  rightPanelCheck():boolean{
    return (this.lowWidth == true && this.wantsAdvancedSearch == true) || 
          (this.lowWidth == false);
  }

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
