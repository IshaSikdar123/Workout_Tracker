// src/app/workout-search/workout-search.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workout-search',
  template: `
    <input type="text" placeholder="Search" (input)="onSearch($event)" class="p-2 border rounded w-full">
  `
})
export class WorkoutSearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(event: any) {
    this.search.emit(event.target.value);
  }
}
