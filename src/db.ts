import Dexie, { Table } from 'dexie';
import {RegionalService} from './app/services/regional-service';
export interface CitiesWithContinents {
  id: number;
  Continent:string,
  City: string;
}
export class AppDB extends Dexie {
    citiesWithContinents!: Table<CitiesWithContinents, number>;
    //apacCities: Table<APACCities, number>;
    //emeaCities : Table<EMEACities, number>;
  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
        citiesWithContinents: '++id,City',
        //apacCities:'++id,City',
        //emeaCities:'++id,City'
    });
  }

  
}

export const db = new AppDB();