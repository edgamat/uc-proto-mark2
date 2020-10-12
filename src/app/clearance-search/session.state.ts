import { SearchCriteria } from './insured-search.service';

export class SessionState {
  criteria: SearchCriteria = { insuredName: '', dbaName: '' };
}
