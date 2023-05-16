import { Component, Input } from '@angular/core';

type Traseu{
  id: number,
  start: string,
  end: string,
  tren: string
}


@Component({
  selector: 'app-page-list-result',
  templateUrl: './page-list-result.component.html',
  styleUrls: ['./page-list-result.component.css']
})
export class PageListResultComponent {
  @Input() fetchedData: Array<Traseu> = [];
}
