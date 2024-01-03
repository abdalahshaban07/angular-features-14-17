import { Directive } from '@angular/core';
import { UnderlineDirective } from './underline.directive';
import { BoldDirective } from './bold.directive';

@Directive({
  selector: '[appMouseenter]',
  standalone: true,
  hostDirectives: [
    {
      directive: BoldDirective,
      outputs: ['hover'],
    },
    {
      directive: UnderlineDirective,
      inputs: ['color:underlineColor'],
    }
  ]
})
export class MouseenterDirective { }
