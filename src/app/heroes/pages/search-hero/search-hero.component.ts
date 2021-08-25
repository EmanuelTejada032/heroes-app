import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styles: [
  ]
})
export class SearchHeroComponent implements OnInit {

  heroes: Hero[] = [];
  searchTerm: string = "";
  hero!: Hero;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searchInput(){
    this.heroesService.getSuggestions(this.searchTerm)
        .subscribe( heroes => this.heroes = heroes)
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    let hero = event.option.value
    this.searchTerm = hero.superhero
    this.heroesService.getHeroById(hero.id)
        .subscribe( hero => this.hero = hero)

  }

}
