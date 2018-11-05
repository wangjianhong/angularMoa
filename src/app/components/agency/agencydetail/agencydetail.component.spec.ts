import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencydetailComponent } from './agencydetail.component';

describe('AgencydetailComponent', () => {
  let component: AgencydetailComponent;
  let fixture: ComponentFixture<AgencydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
