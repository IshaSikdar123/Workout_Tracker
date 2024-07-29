// src/app/workout-filter/workout-filter.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workout-filter',
  template: `
    <select (change)="onFilter($event)" class="p-2 border rounded w-full">
      <option value="">All</option>
      <option value="Running">Running</option>
      <option value="Cycling">Cycling</option>
      <option value="Swimming">Swimming</option>
      <option value="Yoga">Yoga</option>
    </select>
  `
})
export class WorkoutFilterComponent {
  @Output() filter = new EventEmitter<string>();

  onFilter(event: any) {
    this.filter.emit(event.target.value);
  }
}
