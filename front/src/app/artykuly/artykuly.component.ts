import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Artykul } from './Artykul.interface';
import { ArtykulService } from '../ArtykulyService/artykul.service';
import { Stronicowanie } from '../ArtykulyService/artykul.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KoszykService } from '../KoszykService/koszyk.service';


@Component({
  selector: 'app-artykuly',
  templateUrl: './artykuly.component.html',
  styleUrls: ['./artykuly.component.css']
})

export class ArtykulyComponent implements OnInit {

  stronicowanie: Stronicowanie = {
    strona: 1,
    ilosc: 3
  };
  artykuly: Artykul[] = [];

  constructor(private artykulyService: ArtykulService, private koszykService: KoszykService) {}

  ngOnInit(): void {
    this.odswiez();
  }

  odswiez() {
    this.artykulyService.pobierzArtykuly(this.stronicowanie)
      .subscribe(result => { this.artykuly = result });
  }
}
