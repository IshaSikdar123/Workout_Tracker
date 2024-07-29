import { Injectable } from '@angular/core';
import { Workout } from './models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];

  addWorkout(workout: Workout): void {
    this.workouts.push(workout);
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  getWorkoutsByUser(userName: string): Workout[] {
    return this.workouts.filter(workout => workout.userName === userName);
  }
}
