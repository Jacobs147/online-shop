import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoltyTekst]'
})
export class ZoltyTekstDirective {

  @HostBinding('style.color') kolor = "white";

  @HostListener('mouseover') mouseover() {
    this.kolor = "yellow"
  }

  @HostListener('mouseout') mouseout() {
    this.kolor = "white"
  }

  constructor() { }

}
