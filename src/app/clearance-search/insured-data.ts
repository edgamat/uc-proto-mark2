import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { InsuredResult } from './insured-result.model';

@Injectable({
  providedIn: 'root'
})
export class InsuredData implements InMemoryDbService {

  constructor() { }

  createDb() {
    const insureds: InsuredResult[] = [
      { id: '1', insuredName: 'Test 1', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '2', insuredName: 'Test 2', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '3', insuredName: 'Test 3', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '4', insuredName: 'Test 4', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '5', insuredName: 'Test 5', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '6', insuredName: 'Test 6', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '7', insuredName: 'Test 7', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '8', insuredName: 'Test 8', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '9', insuredName: 'Test 9', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' },
      { id: '10', insuredName: 'Test 10', dbaName: null, city: 'Tallahassee', state: 'FL', zip: '32399', coverageDescription: '', team: 'Atlanta', division: 'D1', status: 'Active' }
    ];

    return {insureds};
  }
}
