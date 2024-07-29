// src/app/workout-form/workout-form.component.ts
import { Component } from '@angular/core';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  constructor(private workoutService: WorkoutService) {}

  onSubmit() {
    if (this.userName && this.workoutType && this.workoutMinutes !== null) {
      const workout = {
        userName: this.userName,
        workoutType: [this.workoutType],
        totalWorkoutMinutes: this.workoutMinutes
      };
      this.workoutService.addWorkout(workout);
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = null;
    }
  }
}
