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
  noHeroesFound: boolean = false

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  onSearchInputChange(){
    this.heroesService.getSuggestions(this.searchTerm.trim())
        .subscribe( heroes =>{
          this.heroes = heroes;
          (!heroes.length)? this.noHeroesFound = true: this.noHeroesFound = false;
        })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    if(event.option.value){ //check if selectEvent is getting a hero
      const hero: Hero = event.option.value
      this.searchTerm = hero.superhero
      this.heroesService.getHeroById(hero.id!)
        .subscribe(hero => this.hero = hero)
    }else{
      this.searchTerm='';
    }
  }

}
