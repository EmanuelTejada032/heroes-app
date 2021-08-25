import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `.mat-card{
      margin: 10px
    }
    img{
      width: 177px;
      height: 285px
    }
    
  `
  ]
})
export class HeroCardComponent implements OnInit {

  @Input() hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
