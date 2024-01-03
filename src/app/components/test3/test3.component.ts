import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BoldDirective } from '../../directives/bold.directive';
import { UnderlineDirective } from '../../directives/underline.directive';

@Component({
  selector: 'app-test3',
  standalone: true,
  template: `<p class="center">component3</p>`,
  styleUrl: './test3.component.css',
  imports: [
    CommonModule,
  ],
  hostDirectives: [
    BoldDirective,
    UnderlineDirective,
  ]
})
export class Test3Component {
  underlineDirective = inject(UnderlineDirective);

  constructor() {
    this.underlineDirective.color = 'red';
  }
}
