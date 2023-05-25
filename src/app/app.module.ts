import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageReservationsComponent } from './page-reservations/page-reservations.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PageListResultComponent } from './page-list-result/page-list-result.component';
import { PageListFormComponent } from './page-list-form/page-list-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from '@angular/fire/app';
import { getFirestore } from '@angular/fire/firestore';
import {getAuth, provideAuth} from '@angular/fire/auth';
import { PageSignupComponent } from './page-signup/page-signup.component'
import {MatDialogModule} from '@angular/material/dialog';
import { DialogSignupSuccessComponent } from './dialog-signup-success/dialog-signup-success.component';
import { DiagSignupFailComponent } from './diag-signup-fail/diag-signup-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageListComponent,
    PageReservationsComponent,
    NavbarComponent,
    PageListResultComponent,
    PageListFormComponent,
    PageSignupComponent,
    DialogSignupSuccessComponent,
    DiagSignupFailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
