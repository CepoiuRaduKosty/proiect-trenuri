import { Time } from "@angular/common"

export type Traseu = {
    id: number,
    start: string,
    end: string,
    tren: string,
    dataPlecare: string,
    dataSosire: string
}

export type TraseuSearchQuery = {
  start?: string,
  end?: string,
  dataPlecareMin?: Date,
  dataPlecareMax?: Date,
  dataSosireMin?: Date,
  dataSosireMax?: Date
}