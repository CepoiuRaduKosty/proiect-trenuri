import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Traseu } from '../tipuri';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDbService {
    private db: AngularFirestore;
    private traseeCollection: AngularFirestoreCollection<Traseu>;

    constructor(db: AngularFirestore){
        this.db = db;
        this.traseeCollection = db.collection('/trasee');
    }


}