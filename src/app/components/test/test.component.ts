import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BoldDirective } from '../../directives/bold.directive';
import { UnderlineDirective } from '../../directives/underline.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `<p class="center" appBold appUnderline color="red" (hover)="hoverUnderLine($event)">component1</p>`,
  styleUrl: './test.component.css',
  imports: [
    CommonModule,
    BoldDirective,
    UnderlineDirective
  ],
})
export class TestComponent {
  hoverUnderLine(event:string) {
    console.log(event);
  }
}
