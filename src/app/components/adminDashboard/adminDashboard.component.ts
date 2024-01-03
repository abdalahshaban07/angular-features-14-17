import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>adminDashboard works!</p>`,
  styleUrl: './adminDashboard.component.css'
})
export class AdminDashboardComponent { }
