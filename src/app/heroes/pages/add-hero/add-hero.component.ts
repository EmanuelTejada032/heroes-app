import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
  ]
})
export class AddHeroComponent implements OnInit {

  publishers = [
    {
      id: "DC Comics",
      description: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      description: "Marvel - Comics"
    },
  ]

  hero: Hero = {
    superhero:       "",
    publisher:        Publisher.MarvelComics,
    alter_ego:        "",
    first_appearance: "",
    characters:       "",
    alt_img:          ""
  }
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  save(){
    if(!this.hero.superhero.trim().length) return; //check if there superhero input
    this.heroesService.addNewHero(this.hero)
        .subscribe( hero => console.log(hero))
  }

}
