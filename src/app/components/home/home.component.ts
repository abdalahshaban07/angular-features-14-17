import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `<p>home works!
      <button [routerLink]="['/dashboard']" >Go To DashBoard</button>
  </p>`,
  styleUrl: './home.component.css',
})
export class HomeComponent { }
