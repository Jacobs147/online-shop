import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Artykul1Component } from './artykul1/artykul1.component';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { AutoryzacjaGuard } from './autoryzacja.guard';
import { FormularzComponent } from './formularz/formularz.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { MenuComponent } from './menu/menu.component';
import { ZawartoscKoszykaComponent } from './zawartosc-koszyka/zawartosc-koszyka.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'logowanie', component: LogowanieComponent },
  { path: 'koszyk', component: ZawartoscKoszykaComponent , canActivate: [AutoryzacjaGuard]},
  {
    path: 'artykuly', canActivate: [AutoryzacjaGuard], children: [
      { path: '', component: ArtykulyComponent  },
      { path: 'nowy', component: FormularzComponent , canActivate: [AutoryzacjaGuard], data: {dozwolonaRola: "Admin"} },
      { path: ':id', component: FormularzComponent , canActivate: [AutoryzacjaGuard], data: {dozwolonaRola: "Admin"}  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
