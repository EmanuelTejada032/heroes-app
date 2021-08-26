import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { SeeHeroComponent } from './pages/see-hero/see-hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';





@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    SeeHeroComponent,
    HomeComponent,
    HeroesListComponent,
    HeroCardComponent,
    ImagePipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
