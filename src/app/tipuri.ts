import { Time } from "@angular/common"
import { Timestamp } from "firebase/firestore"

export type Traseu = {
    id: number,
    start: string,
    end: string,
    tren: string,
    oraPlecare: number,
    minutPlecare: number,
    zileValabil: boolean[]
}

export type TraseuSearchQuery = {
  start?: string,
  end?: string,
  dataPlecare?: Date
}

export type FirebaseConfig = {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}

export type FirebaseAuthError = {
  code: string,
  message: string
}

export type Bilet = {
  traseuId: number,
  date: Timestamp
}

export type LinieTabel = {
  start: string,
  end: string,
  tren: string,
  dataPlecare: Date,
}