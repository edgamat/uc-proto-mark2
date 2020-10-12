import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { SessionState } from './session.state';
import { SearchCriteria } from './insured-search.service';

@Injectable({providedIn: 'root'})
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(new SessionState());
  }

  setCriteria(criteria: SearchCriteria): void {
    this.setState({
      ...this.state,
      criteria
    });
  }
}
