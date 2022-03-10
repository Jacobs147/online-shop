import { Component, OnInit } from '@angular/core';
import { Artykul } from '../artykuly/Artykul.interface';
import { KoszykService } from '../KoszykService/koszyk.service';

@Component({
  selector: 'app-zawartosc-koszyka',
  templateUrl: './zawartosc-koszyka.component.html',
  styleUrls: ['./zawartosc-koszyka.component.css']
})
export class ZawartoscKoszykaComponent implements OnInit {
 
  wybraneArtykuly: Artykul[] = [];

  constructor(private koszykService: KoszykService) {
  }

  ngOnInit(): void {
    this.koszykService.pobierzKoszyk().subscribe(res =>  this.wybraneArtykuly = res);
  }
}
