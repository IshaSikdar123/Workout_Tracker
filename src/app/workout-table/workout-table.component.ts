// src/app/workout-table/workout-table.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { WorkoutService } from '../workout.service';
import { Workout } from '../models/workout.model';

@Component({
  selector: 'app-workout-table',
  templateUrl: './workout-table.component.html',
  styleUrls: ['./workout-table.component.css']
})
export class WorkoutTableComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
  }

  // Method to navigate to the Workout Graph page
  viewGraph(userName: string): void {
    this.router.navigate(['/workout-graph', userName]);
  }
}
