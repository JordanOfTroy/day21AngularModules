import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent
  ],
  imports: [
    HeroRoutingModule,
    SharedModule
  ],
  exports: [
    HeroSearchComponent
  ]
})
export class HeroModule { }