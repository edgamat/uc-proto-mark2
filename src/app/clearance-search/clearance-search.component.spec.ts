import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceSearchComponent } from './clearance-search.component';

describe('ClearanceSearchComponent', () => {
  let component: ClearanceSearchComponent;
  let fixture: ComponentFixture<ClearanceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearanceSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
