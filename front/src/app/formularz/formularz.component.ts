import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artykul } from '../artykuly/Artykul.interface';
import { ArtykulService } from '../ArtykulyService/artykul.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.css']
})
export class FormularzComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private artykulyService: ArtykulService, private router: Router) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.id > 0) {
      this.artykulyService.getArtykul(this.id).subscribe(o => this.createForm(o));
    } else {
      this.createForm(null);
    }
  }

  private createForm(artykul?: Artykul) {
    this.form = this.fb.group({
      nazwa: new FormControl(artykul?.nazwa, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      cena: new FormControl(artykul?.cena, [Validators.required, Validators.min(0)]),
      opis: new FormControl(artykul?.opis, [Validators.minLength(0), Validators.maxLength(1000)])
    });

    this.form.controls['nazwa'].valueChanges.subscribe(nowaNazwa => {
      console.log(nowaNazwa);
      // this.form.controls['nazwa'].setValue(nowaNazwa);
    });

    this.form.controls['cena'].valueChanges.subscribe(nowaCena => {
      console.log(nowaCena);
    });
  }

  onSubmit() {
    if(this.id > 0) {
      this.artykulyService.editArtykul(this.id, this.form.value).subscribe(o => this.router.navigateByUrl('artykuly'));
    } else {
      this.artykulyService.addArtykul(this.form.value).subscribe(o => this.router.navigateByUrl('artykuly'));
    }
  }

}
