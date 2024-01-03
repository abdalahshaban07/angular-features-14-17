import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-features';
  private destroyRef = inject(DestroyRef)

  onDestroy = this.destroyRef.onDestroy(() => {
    console.log('AppComponent destroyed')
    this.sub.unsubscribe()
  })

  counter$: Observable<number> = interval(1000)

  sub = this.counter$.subscribe((val) => {
    console.log(val)
  })

}
