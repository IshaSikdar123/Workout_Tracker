// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutTableComponent } from './workout-table/workout-table.component';
import { WorkoutGraphComponent } from './workout-graph/workout-graph.component';

const routes: Routes = [
  { path: 'workout-table', component: WorkoutTableComponent },
  { path: 'workout-graph/:userName', component: WorkoutGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
