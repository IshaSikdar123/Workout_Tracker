// src/app/workout-graph/workout-graph.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { Workout } from '../models/workout.model';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-graph',
  templateUrl: './workout-graph.component.html',
  styleUrls: ['./workout-graph.component.css']
})
export class WorkoutGraphComponent implements OnInit {
  userName: string | undefined;
  workouts: Workout[] = [];
  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{
      label: 'Workout Minutes',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  chartOptions: ChartOptions<'bar'> = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userName = params['userName'];
      this.workouts = this.workoutService.getWorkoutsByUser(this.userName || '');
      this.updateChart();
    });
  }

  updateChart(): void {
    this.chartData.labels = this.workouts.map(workout => workout.workoutType.join(', '));
    this.chartData.datasets[0].data = this.workouts.map(workout => workout.workoutMinutes);
  }
}
