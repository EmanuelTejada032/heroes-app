import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { SeeHeroComponent } from './pages/see-hero/see-hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';



@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    SeeHeroComponent,
    HomeComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
