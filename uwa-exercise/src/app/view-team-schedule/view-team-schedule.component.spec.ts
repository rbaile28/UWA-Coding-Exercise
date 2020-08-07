import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamScheduleComponent } from './view-team-schedule.component';

describe('ViewTeamScheduleComponent', () => {
  let component: ViewTeamScheduleComponent;
  let fixture: ComponentFixture<ViewTeamScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeamScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeamScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
