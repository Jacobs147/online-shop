import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FormularzComponent } from './formularz/formularz.component';
import { Artykul1Component } from './artykul1/artykul1.component';
import { ZawartoscKoszykaComponent } from './zawartosc-koszyka/zawartosc-koszyka.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { ZoltyTekstDirective } from './zolty-tekst.directive';
import { AutoryzacjaDirective } from './autoryzacja.directive';
import { PogrubionyNiebieskiDirective } from './pogrubiony-niebieski.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArtykulyComponent,
    KoszykComponent,
    MenuComponent,
    FormularzComponent,
    Artykul1Component,
    ZawartoscKoszykaComponent,
    LogowanieComponent,
    ZoltyTekstDirective,
    AutoryzacjaDirective,
    PogrubionyNiebieskiDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
