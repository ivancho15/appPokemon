import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarPokemonComponent } from './buscar-pokemon/buscar-pokemon.component';
import { CrudPokemonService } from './services/crud-pokemon.service';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { EditPokemonComponent } from './add-pokemon/edit-pokemon/edit-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarPokemonComponent,
    AddPokemonComponent,
    EditPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
