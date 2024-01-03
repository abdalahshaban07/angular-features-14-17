import { Directive, ElementRef, EventEmitter, HostListener, Output, inject } from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true,
})
export class BoldDirective {
  @Output() hover = new EventEmitter<string>();
  private elementRef = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.hover.emit('hover');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = 'normal';
  }
}
