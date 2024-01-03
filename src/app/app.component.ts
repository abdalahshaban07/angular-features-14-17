import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-features';

  counter = signal(0);
  isEven = computed(() => {
    console.log(this.counter() % 2 === 0, 'isEven computed');
    return this.counter() % 2 === 0
  });

  trackCounter = effect(() => {
    console.log(this.counter(), 'counter effect');
  });


  decrement() {
    // this.counter.set(this.counter() - 1);
    this.counter.update(n => n - 1);
  }

  increment() {
    // this.counter.set(this.counter() + 1);
    this.counter.update(n => n + 1);
  }
}
