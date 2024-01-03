import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<button [disabled]="disabled">{{text}}</button>`,
  styleUrl: './testChild.component.css',
})
export class TestChildComponent {
  @Input({ required: true }) text!: string;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
}
