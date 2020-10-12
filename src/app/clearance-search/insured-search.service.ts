import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsuredResult } from './insured-result.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

export interface SearchCriteria
{
  insuredName: string;
  dbaName: string;
}

@Injectable({providedIn: 'root'})
export class InsuredService {

  private clearanceUrl = 'api/insureds';

  constructor(private httpClient: HttpClient) { }

  searchRecords(criteria: SearchCriteria): Observable<InsuredResult[]> {
    return this.httpClient.get<InsuredResult[]>(this.clearanceUrl)
      .pipe(
        map(items => items.filter(item => item.insuredName.toLowerCase().indexOf(criteria.insuredName.toLowerCase()) > -1)),
        tap(data => console.log(data.length)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
