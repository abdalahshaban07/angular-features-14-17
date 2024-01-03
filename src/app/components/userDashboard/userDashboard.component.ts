import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>userDashboard works!</p>`,
  styleUrl: './userDashboard.component.css',
})
export class UserDashboardComponent { }
