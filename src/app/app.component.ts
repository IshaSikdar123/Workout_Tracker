import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUser: string | undefined;

  onUserSelected(user: string) {
    this.selectedUser = user;
  }
}
