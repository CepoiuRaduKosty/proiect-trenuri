import { Time } from "@angular/common"

export type Traseu = {
    id: number,
    start: string,
    end: string,
    tren: string,
    dataPlecare: Date,
    dataSosire: Date
}

export type TraseuSearchQuery = {
  start?: string,
  end?: string,
  dataPlecareMin?: Date,
  dataPlecareMax?: Date,
  dataSosireMin?: Date,
  dataSosireMax?: Date
}

export type FirebaseConfig = {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}