import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private http = inject(HttpClient)
  title = 'angular-features';

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) => {
      // console.log(data);
    })
  }
}
