import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from "rxjs/operators"

@Component({
  selector: 'app-see-hero',
  templateUrl: './see-hero.component.html',
  styles: [
  ]
})
export class SeeHeroComponent implements OnInit {

  hero!: Hero;

  constructor( private activatedRoute : ActivatedRoute, private heroServices: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroServices.getHeroById(id)), //switch to new observable with the return of subscription to activated route params
        ).subscribe( hero =>{
           console.log(hero)
           this.hero = hero
        })
  }

  goBack(){
    this.router.navigate(['heroes/list'])
  }

}
