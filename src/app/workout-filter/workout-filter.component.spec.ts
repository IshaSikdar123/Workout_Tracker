import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFilterComponent } from './workout-filter.component';

describe('WorkoutFilterComponent', () => {
  let component: WorkoutFilterComponent;
  let fixture: ComponentFixture<WorkoutFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
