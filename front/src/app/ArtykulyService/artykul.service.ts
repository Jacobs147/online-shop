import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { Artykul } from '../artykuly/Artykul.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutoryzacjaService } from '../autoryzacja.service';

export interface Stronicowanie {
  strona: number;
  ilosc: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArtykulService {
  private aktualizacja: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private autoryzacjaService : AutoryzacjaService) {
  }

  pobierzArtykuly(stronicowanie: Stronicowanie): Observable<Artykul[]> {
    return this.http.get<Artykul[]>('https://localhost:44370/api/Articles', {
      params: {
        strona: stronicowanie.strona.toString(),
        ilosc: stronicowanie.ilosc.toString()
      }, headers: this.autoryzacjaService.naglowekAutoryzacji()
    });
  }

  getArtykul(id : number) : Observable<Artykul>  {
    return this.http.get<Artykul>('https://localhost:44370/api/Articles/' + id, {
      headers: this.autoryzacjaService.naglowekAutoryzacji()
    });  
  }

  addArtykul(artykul: Artykul): Observable<Artykul> {
    return this.http.post<Artykul>("https://localhost:44370/api/Articles", artykul, {
      headers: this.autoryzacjaService.naglowekAutoryzacji()
    })
    .pipe(
      tap(res => this.aktualizacja.next('Dodano nowy artykul'))
    );
  }

  editArtykul(id: number, artykul: Artykul): Observable<Artykul> {
    return this.http.put<Artykul>("https://localhost:44370/api/Articles/" + id, artykul, {
      headers: this.autoryzacjaService.naglowekAutoryzacji()
    })
    .pipe(
      tap(res => this.aktualizacja.next('Dokonano edycji artykulu'))
    );
  }  
}
