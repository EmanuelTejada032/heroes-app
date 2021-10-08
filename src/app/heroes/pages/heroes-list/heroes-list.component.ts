import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [
  ]
})
export class HeroesListComponent implements OnInit {

  heroesList: Hero[] = []
  constructor(private heroesService: HeroesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( heroes => this.heroesList = heroes)
  }

}
