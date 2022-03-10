import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artykul } from '../artykuly/Artykul.interface';
import { ArtykulService } from '../ArtykulyService/artykul.service';
import { KoszykService } from '../KoszykService/koszyk.service';

@Component({
  selector: 'app-artykul1',
  templateUrl: './artykul1.component.html',
  styleUrls: ['./artykul1.component.css']
})
export class Artykul1Component implements OnInit {
  @Input() artykul: Artykul;
  wybrany: boolean = false;

  constructor(private artykulyService : ArtykulService, private koszykService : KoszykService, private route: ActivatedRoute, private router: Router) {

    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.artykulyService.getArtykul(id).subscribe(a => this.artykul = a);
    }
  }

  onDodajDoKoszyka() {
    this.koszykService.dodajDoKoszyka(this.artykul).subscribe(r => {
      console.log('dodano do koszyka: ' + this.artykul.id)
    });
  }

  ngOnInit(): void {
  }
}
