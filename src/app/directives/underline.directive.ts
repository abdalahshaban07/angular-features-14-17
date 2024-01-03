import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true,
})
export class UnderlineDirective {
  @Input() color = 'black';
  private elementRef = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.textDecoration = 'underline';
    this.elementRef.nativeElement.style.textDecorationColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.textDecoration = 'none';
    this.elementRef.nativeElement.style.textDecorationColor = 'none';
  }
}
