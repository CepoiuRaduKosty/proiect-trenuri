import { Component } from '@angular/core';
import { PageListResultComponent } from '../page-list-result/page-list-result.component';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  trasee = [
    {
      id: 1,
      start: 'sibiu',
      end: 'jina',
      tren: 'ir333'
    },
    {
      id: 2,
      start: 'jina',
      end: 'sibiu',
      tren: 'ir444'
    },
    {
      id: 3,
      start: 'bucuresti',
      end: 'ploiesti',
      tren: 'ir987'
    }
  ];

  fetchedTable = true;
}
