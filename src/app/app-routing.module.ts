import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component'
import { BuscarPokemonComponent } from './buscar-pokemon/buscar-pokemon.component';

const routes: Routes = [
  {path: '', component: BuscarPokemonComponent},
  {path: 'agregarpokemon', component: AddPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
