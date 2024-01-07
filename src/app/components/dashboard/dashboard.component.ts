import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>dashboard works!</p>`,
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  constructor() { 
    // throw new Error('DashboardComponent constructor');
  }
 }
