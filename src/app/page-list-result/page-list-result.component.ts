import { Component, Input } from '@angular/core';
import { Traseu } from '../tipuri';



@Component({
  selector: 'app-page-list-result',
  templateUrl: './page-list-result.component.html',
  styleUrls: ['./page-list-result.component.css']
})
export class PageListResultComponent {
  @Input() fetchedData: Array<Traseu> = [];
}
