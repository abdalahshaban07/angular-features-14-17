import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
      <p>id : {{id}}</p>
      <p>data : {{data}}</p>
      <p>user : {{user}}</p>
  `,
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() id?: string;
  @Input() data?: string;
  @Input() user?: boolean;

  // private activatedRoute = inject(ActivatedRoute);
  // id!: string;
  // data!: any;

  // constructor() {
  //   this.activatedRoute.data.subscribe((data) => {
  //     console.log('data', data);
  //     this.data = data;
  //   });

  //   this.id = this.activatedRoute.snapshot.paramMap.get('id')!;

  //   console.log('id', this.id);
  // }
}
