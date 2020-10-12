import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InsuredResult } from './insured-result.model';
import { InsuredService, SearchCriteria } from './insured-search.service';
import { SessionStore } from './session.store';

@Component({
  selector: 'app-clearance-search',
  templateUrl: './clearance-search.component.html',
  styleUrls: ['./clearance-search.component.scss'],
})
export class ClearanceSearchComponent implements OnInit, OnDestroy {
  showResults = false;
  showNoResultsMessage = false;
  showTooManyResultsMessage = false;
  showContinueOptions = false;
  errorMessage: string;
  searching = false;

  searchForm: FormGroup;
  clearanceRecords: InsuredResult[] = [];
  formattedAddress = '';
  options = {};
  sub: Subscription;

  constructor(
    private clearanceService: InsuredService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sessionStore: SessionStore) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      insuredName: ['', [Validators.required]],
      dbaName: '',
    });

    this.sub = this.sessionStore.state$.subscribe(state => {
      this.searchForm.patchValue(
        {
          insuredName: state.criteria.insuredName,
          dbaName: state.criteria.dbaName
         });

      if (!this.searching && state.criteria.insuredName !== '') {
        this.onSearchClick();
      }
    });
}

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSearchClick(): void {
    console.log(this.searchForm.value);
    this.searching = true;

    const criteria: SearchCriteria = { ...this.searchForm.value };

    this.sessionStore.setCriteria(criteria);

    this.clearanceService.searchRecords(criteria).subscribe({
      next: products => {
        this.clearanceRecords = products;

        this.showNoResultsMessage = false;
        this.showTooManyResultsMessage = false;

        if (this.clearanceRecords.length === 0) {
          this.showNoResultsMessage = true;
          this.showContinueOptions = true;
        } else if (this.clearanceRecords.length > 9) {
          this.showTooManyResultsMessage = true;
        } else {
          this.showResults = true;
          this.showContinueOptions = true;
        }
        this.searching = false;
      },
      error: err => {
        this.errorMessage = err;
        this.searching = false;
      }
    });

  }

  onResetClick(): void {
    this.searchForm.reset();
    this.showResults = false;
    this.showNoResultsMessage = false;
    this.showTooManyResultsMessage = false;
    this.showContinueOptions = false;
}

  onContinue(): void {
    console.log('continue');
    this.router.navigate(['create-submission'], { relativeTo: this.route });
  }
}
