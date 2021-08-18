import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { SeeHeroComponent } from './pages/see-hero/see-hero.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: HeroesListComponent
      },
      {
        path: 'add',
        component: AddHeroComponent
      },
      {
        path: 'edit/:id',
        component: AddHeroComponent
      },
      {
        path: 'search',
        component: SearchHeroComponent
      },
      {
        path: ':id',
        component: SeeHeroComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
