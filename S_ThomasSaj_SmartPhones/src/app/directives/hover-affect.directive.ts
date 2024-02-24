import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @Input() affectStyle: string="";

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyle();
  }

  private applyStyle() {
    if (this.affectStyle === 'underline') {
      this.el.nativeElement.style.textDecoration='underline';
    } else if (this.affectStyle === 'bold') {
      this.el.nativeElement.style.fontWeight='bold';
    }
  }

  private removeStyle() {
    if (this.affectStyle === 'underline') {
      this.el.nativeElement.style.textDecoration='none';
    } else if (this.affectStyle === 'bold') {
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}
