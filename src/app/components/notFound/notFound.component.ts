import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>notFound works!</p>`,
  styleUrl: './notFound.component.css',
})
export class NotFoundComponent { }
