import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InsuredResult } from './insured-result.model';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      insuredName: ['', [Validators.required]],
      dbaName: '',
    });
  }
}
