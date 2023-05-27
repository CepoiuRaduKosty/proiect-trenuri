import { CollectionReference, Firestore, collection, collectionData, Query} from '@angular/fire/firestore'
import { Injectable, inject } from '@angular/core';
import {Observable} from 'rxjs'
import { Traseu, TraseuSearchQuery } from '../tipuri';
import { getDocs, DocumentData, query, orderBy, where, doc, setDoc} from '@angular/fire/firestore';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDbService {
    private firestore: Firestore = inject(Firestore);
    private collectionTrasee: CollectionReference<DocumentData>;
    private collectionBilete: CollectionReference<DocumentData>;

    constructor(){
      this.collectionTrasee = collection(this.firestore, 'trasee');
      this.collectionBilete = collection(this.firestore, 'bilete');
    }

    async getTrasee() : Promise<Traseu[]> {
      const docList = await getDocs(this.collectionTrasee);
      let trasee: Traseu[] = [];
      docList.forEach((doc) => {
        trasee.push(doc.data() as Traseu);
      })
      return trasee;
    }

    userInitBilete(userUID: string){
      const numeDoc = "user-" + userUID;
      setDoc(doc(this.firestore, "bilete", numeDoc ), {
          userUid: userUID
      });
    } 
}