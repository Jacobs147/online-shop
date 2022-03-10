import { Component, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Artykul } from './artykuly/Artykul.interface';
import { AutoryzacjaService } from './autoryzacja.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  
  constructor(private appTitle: Title, private router: Router, private autoryzacjService : AutoryzacjaService) {
    
  }  

  ngOnInit() {
    this.appTitle.setTitle('Test');
  }

  czyZalogowany() : boolean {
      return this.autoryzacjService.pobierzZalogowanegoUzytkownika() != null;
  }

  wyloguj() {
    this.autoryzacjService.wyloguj();
    this.router.navigateByUrl('');
  }

  powrot() {
    this.router.navigateByUrl('');
  }

  selectedProduct: Subject<Artykul> = new Subject<Artykul>();

  addToCart: EventEmitter<Artykul> = new EventEmitter<Artykul>(); 

  onProductSelected(event : Artykul) {
    this.selectedProduct.next(event);
  }
}
