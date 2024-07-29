import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { WorkoutTrackerComponent } from './workout-tracker/workout-tracker.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutSearchComponent } from './workout-search/workout-search.component';
import { WorkoutFilterComponent } from './workout-filter/workout-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutTrackerComponent,
    WorkoutListComponent,
    WorkoutSearchComponent,
    WorkoutFilterComponent
    // Declare other components
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }