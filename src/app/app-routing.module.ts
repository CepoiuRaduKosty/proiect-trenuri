import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageReservationsComponent } from './page-reservations/page-reservations.component';

const routes: Routes = [
  {path: 'list', component: PageListComponent},
  {path: 'login', component: PageLoginComponent},
  {path: 'reservations', component: PageReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
