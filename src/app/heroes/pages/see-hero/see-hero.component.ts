import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-see-hero',
  templateUrl: './see-hero.component.html',
  styles: [
  ]
})
export class SeeHeroComponent implements OnInit {

  hero!: Hero;

  constructor( private activatedRoute : ActivatedRoute, private heroServices: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .subscribe(({id}) => {
          console.log(id)
        })
  }

}
