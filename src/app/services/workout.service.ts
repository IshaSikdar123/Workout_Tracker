import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  getWorkouts(searchTerm: string, filterType: string, itemsPerPage: number, currentPage: number) {
    const allWorkouts = [
      { userName: 'John Doe', workoutType: ['Running', 'Cycling'], totalWorkoutMinutes: 75 },
      { userName: 'Jane Smith', workoutType: ['Swimming', 'Running'], totalWorkoutMinutes: 80 },
      { userName: 'Mike Johnson', workoutType: ['Yoga', 'Cycling'], totalWorkoutMinutes: 90 },
      // Add more mock data if needed
    ];
    const filteredWorkouts = allWorkouts.filter(workout =>
      workout.userName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === '' || workout.workoutType.includes(filterType))
    );
    const paginatedWorkouts = filteredWorkouts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return of({ workouts: paginatedWorkouts, totalWorkouts: filteredWorkouts.length });
  }
}
