import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./components/test/test.component";
import { Test2Component } from "./components/test2/test2.component";
import { Test3Component } from './components/test3/test3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, TestComponent, Test2Component, Test3Component]
})
export class AppComponent {
  title = 'angular-featurs';
}
