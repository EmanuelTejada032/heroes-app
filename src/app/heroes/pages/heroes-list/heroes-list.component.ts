import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [
    `
    img{
      width: 177px;
      height: 285px
    }
    `
  ]
})
export class HeroesListComponent implements OnInit {

  heroesList: Hero[] = []
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( heroes => this.heroesList = heroes)
  }

}
