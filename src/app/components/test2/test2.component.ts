import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MouseenterDirective } from '../../directives/mouseenter.directive';

@Component({
  selector: 'app-test2',
  standalone: true,
  template: `<p class="center" appMouseenter underlineColor="green" (hover)="hoverUnderLine()">component2</p>`,
  styleUrl: './test2.component.css',
  imports: [
    CommonModule,
    MouseenterDirective
  ],
})
export class Test2Component {
  hoverUnderLine() {
    console.log('hoverUnderLine');
  }
}
