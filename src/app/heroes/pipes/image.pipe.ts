import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'image'
  //pure: false
})
export class ImagePipe implements PipeTransform {

  transform(hero: Hero): string {
    if(!hero.id && !hero.alt_img){
      return `assets/no-image.png`
    } else if(hero.alt_img){
      return hero.alt_img
    }else if( hero.alt_img === ""){
      return `assets/no-image.png`
    }else{
      return `assets/heroes/${hero.id}.jpg`;
    }
    
  }

}
