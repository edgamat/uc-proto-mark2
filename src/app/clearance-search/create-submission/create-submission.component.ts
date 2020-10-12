import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionStore } from './../session.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-submission',
  templateUrl: './create-submission.component.html',
  styleUrls: ['./create-submission.component.scss']
})
export class CreateSubmissionComponent implements OnInit, OnDestroy {

  insuredName: string;
  inputForm: FormGroup;
  sub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sessionStore: SessionStore) { }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      insuredName: '',
      dbaName: '',
    });

    this.sub = this.sessionStore.state$.subscribe(state => {
      if (state.criteria.insuredName === '') {
        this.router.navigate([''], { relativeTo: this.route });
      }
      this.inputForm.patchValue(
        {
          insuredName: state.criteria.insuredName,
          dbaName: state.criteria.dbaName
         });
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
