import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPogrubionyNiebieski]'
})
export class PogrubionyNiebieskiDirective {

  @HostBinding('style.color') color = 'black';
  @HostBinding('style.font-weight') fontWeight = 'normal';

  @HostListener('mouseover') mouseover() {
    this.color = "blue";
    this.fontWeight = 'bold';
  }

  @HostListener('mouseout') mouseout() {
    this.color = "black";
    this.fontWeight = 'normal';
  }

  constructor() { }
}
