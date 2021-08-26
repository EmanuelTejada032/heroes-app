import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';


import { Hero, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [`
    img{
      width: 500px;
      height: 800px
    }
  `]
})
export class AddHeroComponent implements OnInit {
  newHero: boolean = true;
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
  constructor(private heroesService: HeroesService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router, 
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.router.url.includes("edit")){
      this.newHero = false;
      this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.heroesService.getHeroById(id))
      ).subscribe( hero => this.hero = hero)
    }
    
  }

  save(){

    if(this.hero.id){
      console.log("edit hero")
      this.heroesService.editHero(this.hero)
          .subscribe( hero => this.snackBar.open("Hero updated", "ok", {
            duration: 2500
          }))
    }else{
      console.log("create hero")
      if(!this.hero.superhero.trim().length) return; //check if there superhero input
      this.heroesService.addNewHero(this.hero)
          .subscribe( hero =>{
            this.router.navigate(["/heroes/edit", hero.id])
            this.snackBar.open("New hero created", "ok", {
              duration: 2500
            })
          } )
    }
  }

  delete(){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.heroesService.deleteHero(`${this.hero.id}`)
          .subscribe( res =>{
            this.router.navigate(["/heroes"])
            this.snackBar.open("Hero deleted", "ok", {
              duration: 2500
            })
          })
      }
      
    });
  }

}
