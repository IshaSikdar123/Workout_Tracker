import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/workout.model';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.component.html',
  styleUrls: ['./workout-tracker.component.css']
})
export class WorkoutTrackerComponent implements OnInit {
  workouts: Workout[] = [];
  selectedWorkouts: string[] = [];
  isDropdownOpen = false;
  isDarkMode = false;

  sliderClasses = 'dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition';

  ngOnInit(): void {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.body.classList.add('dark');
      this.isDarkMode = true;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode ? 'enabled' : 'disabled');
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onWorkoutTypeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (input.checked) {
      this.selectedWorkouts.push(value);
    } else {
      this.selectedWorkouts = this.selectedWorkouts.filter(workout => workout !== value);
    }
  }

  addWorkout(userName: string, workoutTypes: string[], workoutMinutes: string): void {
    const workout: Workout = {
      userName,
      workoutType: workoutTypes,
      workoutMinutes: Number(workoutMinutes)
    };
    this.workouts.push(workout);
    this.selectedWorkouts = []; // Reset selected workouts after adding
  }
}
