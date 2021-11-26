import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Pokemon } from '../models/pokemon.model';
import { CrudPokemonService } from '../services/crud-pokemon.service';


@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css']
})
export class BuscarPokemonComponent implements OnInit {

  public pokemones: Array<Pokemon> = [];
  public pokemonesExist: boolean = false;
  nombrePokemon!: string;

  @ViewChild('formpokemon')formpokemon!: NgForm;
  constructor(private _pokemonesServices: CrudPokemonService) { }

  ngOnInit(): void {
    this.nombrePokemon= '';
  }

  async buscarPokemon(pokemonNombre: string){
    const nombre = pokemonNombre;
    console.log(nombre);
    this._pokemonesServices.getPokemon(nombre)
      .subscribe(data => {this.pokemones = data;
        this.pokemones.length > 0 ? this.pokemonesExist = true : this.pokemonesExist = false;});
    
  }

  onEnter(event: any){
    this.buscarPokemon(event.target.value);
  }

  onSubmit(){
    this.nombrePokemon = this.formpokemon.value.buscar
    this.formpokemon.reset();
  }

  eliminarPokemon(id$: any){
    this._pokemonesServices.delPokemon(id$)
    this.pokemones = [];
    this.pokemonesExist = false
  }

}
