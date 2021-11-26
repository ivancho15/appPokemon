import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component'
import { EditPokemonComponent } from './add-pokemon/edit-pokemon/edit-pokemon.component';
import { BuscarPokemonComponent } from './buscar-pokemon/buscar-pokemon.component';

const routes: Routes = [
  {path: '', component: BuscarPokemonComponent},
  {path: 'agregarpokemon', component: AddPokemonComponent},
  {path: 'editarpokemon/:id', component: EditPokemonComponent},
  {path: '**', component: BuscarPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
