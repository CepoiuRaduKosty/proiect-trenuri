import { CollectionReference, Firestore, collection, collectionData, Query} from '@angular/fire/firestore'
import { Injectable, inject } from '@angular/core';
import {Observable} from 'rxjs'
import { Bilet, Traseu, TraseuSearchQuery } from '../tipuri';
import { getDocs, DocumentData, query, orderBy, where, doc, setDoc, limit, addDoc} from '@angular/fire/firestore';
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

    async isBiletCumparat(userUID: string, _traseuId: number, dataCalatorie: Date){
      const numeDocUser = "user-" + userUID;
      const docList = await getDocs(collection(this.firestore, "bilete", numeDocUser, "bileteUser"));
      let ret: boolean = false;
      docList.forEach((doc) => {
        let traseuDate = (doc.data() as Bilet).date.toDate();
        if(traseuDate.getDay() == dataCalatorie.getDay() &&
           traseuDate.getMonth() == dataCalatorie.getMonth() &&
           traseuDate.getFullYear() == dataCalatorie.getFullYear() &&
           (doc.data() as Bilet).traseuId == _traseuId){
            ret = true;
        }
      });
      return ret;
    }

    async getUserBileteRecente(userUID: string){
      const numeDocUser = "user-" + userUID;
      let threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      let q = query(collection(this.firestore, "bilete", numeDocUser, "bileteUser"), where("date", ">=", threeDaysAgo));
      let docList = await getDocs(q);
      let ret: Bilet[] = [];
      docList.forEach((doc) => {
        ret.push(doc.data() as Bilet);
      })
      return ret;
    }

    async getUserBileteNerecente(userUID: string){
      const numeDocUser = "user-" + userUID;
      let threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      let q = query(collection(this.firestore, "bilete", numeDocUser, "bileteUser"), where("date", "<", threeDaysAgo));
      let docList = await getDocs(q);
      console.log(docList);
      let ret: Bilet[] = [];
      docList.forEach((doc) => {
        ret.push(doc.data() as Bilet);
      })
      return ret;
    }

    userAddBilet(userUID: string, _traseuId: number, dataCalatorie: Date){
      const numeDocUser = "user-" + userUID;
      addDoc(collection(this.firestore, "bilete", numeDocUser, "bileteUser"), {
        traseuId: _traseuId,
        date: Timestamp.fromDate(dataCalatorie)
      })
    }

    async getTraseuSchedule(traseuId: number){
      const q = query(this.collectionTrasee, where("id", "==", traseuId), limit(1));
      const docList = await getDocs(q);
      let ret: boolean[] = [];
      docList.forEach((doc) => {
        ret = (doc.data() as Traseu).zileValabil;
      })
      return ret;
    }
}