import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Artykul } from '../artykuly/Artykul.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { KoszykComponent } from '../koszyk/koszyk.component';
import { AutoryzacjaService } from '../autoryzacja.service';

@Injectable({
  providedIn: 'root'
})
export class KoszykService {
  private aktualizacja: BehaviorSubject<string> = new BehaviorSubject<string>('');
  koszykKomponent: KoszykComponent;

  constructor(private http: HttpClient, private autoryzacjaService : AutoryzacjaService) { }

  pobierzKoszyk(): Observable<Artykul[]> {
    return this.http.get<Artykul[]>('https://localhost:44370/api/Cart', {
      headers: this.autoryzacjaService.naglowekAutoryzacji()
    });
  }

  wyczyscKoszyk(): Observable<Artykul[]> {
    return this.http.delete<Artykul[]>('https://localhost:44370/api/Cart', {
      headers: this.autoryzacjaService.naglowekAutoryzacji()
    });
  }

  dodajDoKoszyka(artykul: Artykul): Observable<Artykul[]> {
    return this.http.post<Artykul[]>('https://localhost:44370/api/Cart', artykul.id, {
      headers: this.autoryzacjaService.naglowekAutoryzacji()
    })
      .pipe(
        tap(res => {
          this.aktualizacja.next('Dodano nowy obiekt')
          this.pobierzKoszyk().subscribe(r => this.koszykKomponent.updateCart(r));
        })
      );
  }

  addKoszykSubscriber(koszykComponent: KoszykComponent) {
    this.koszykKomponent = koszykComponent;
  }
}
