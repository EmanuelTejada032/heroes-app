import { Component, OnInit } from '@angular/core';
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

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searchInput(){
    this.heroesService.getHeroes()
        .subscribe( heroes => this.heroes = heroes)
  }


}
