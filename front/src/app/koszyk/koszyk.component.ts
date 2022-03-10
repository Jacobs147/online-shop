import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Artykul } from '../artykuly/Artykul.interface';
import { KoszykService } from '../KoszykService/koszyk.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent implements OnInit {

  iloscArtykulow : number = 0;
  wybraneArtykuly: Artykul[] = [];

  constructor(private koszykService: KoszykService) {
  }

  ngOnInit(): void {
    this.koszykService.pobierzKoszyk().subscribe(res =>  this.updateCart(res));
    this.koszykService.addKoszykSubscriber(this);
  }

  onClearCartClick() {
    this.koszykService.wyczyscKoszyk().subscribe(res => this.updateCart(res));
  }

  updateCart(artykuly : Artykul[]) {
    this.wybraneArtykuly = artykuly;
    this.iloscArtykulow = artykuly.length;
  }
}
