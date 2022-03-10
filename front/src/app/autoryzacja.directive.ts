import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AutoryzacjaService } from './autoryzacja.service';

@Directive({
  selector: '[appAutoryzacja]'
})
export class AutoryzacjaDirective {

  constructor(private templateRef: TemplateRef<any>, private vc : ViewContainerRef, private autoryzacjaService : AutoryzacjaService) {
    autoryzacjaService.zmianaStanuUzytkownika.subscribe(() => this.sprawdzUzytkownika()); 
   }

   private sprawdzUzytkownika() {
    if(this.autoryzacjaService.pobierzZalogowanegoUzytkownika() != null) {
      this.vc.createEmbeddedView(this.templateRef);
    } else {
      this.vc.clear();
    }
   }

}
