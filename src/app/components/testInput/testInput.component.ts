import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestChildComponent } from '../testChild/testChild.component';



@Component({
  selector: 'app-test-input',
  standalone: true,
  template: `<app-test-child text="parent" disabled/>`,
  // template: `<app-test-child text="parent" disabled= "true"/>`,
  // template: `<app-test-child text="parent" disabled= "false"/>`,
  // template: `<app-test-child text="parent" [disabled]="false"/>`,
  // template: `<app-test-child text="parent" [disabled]="true"/>`,
  styleUrl: './testInput.component.css',
  imports: [
    CommonModule,
    TestChildComponent
  ],
})
export class TestInputComponent { }
