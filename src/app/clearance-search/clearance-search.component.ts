import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuredResult } from './insured-result.model';
import { InsuredService, SearchCriteria } from './insured-search.service';

@Component({
  selector: 'app-clearance-search',
  templateUrl: './clearance-search.component.html',
  styleUrls: ['./clearance-search.component.scss'],
})
export class ClearanceSearchComponent implements OnInit {
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

  constructor(
    private clearanceService: InsuredService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      insuredName: ['', [Validators.required]],
      dbaName: '',
    });
  }

  onSearchClick(): void {
    console.log(this.searchForm.value);
    this.searching = true;

    const criteria: SearchCriteria = { ...this.searchForm.value };

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
  }
}
