import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Pokemon } from '../../models/pokemon.model';
import { CrudPokemonService } from '../../services/crud-pokemon.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  id!: number;
  public pokemon!: Pokemon;
  hoy = new Date();

  nombrePokemon!: string;
  tipoPokemon!:string;
  hpPokemon!:number;
  imagePokemon!:string;
  ataquePokemon!:number;
  defensaPokemon!:number;
    
  tipos: string [] = [
    'water','fire','normal','bug','poison'
  ]
  
  @ViewChild('formEdit')formEdit!: NgForm;
  constructor(private pokemonService: CrudPokemonService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params
                .subscribe(param => {
                  this.id = param["id"];
                })
                this.pokemonService.getPokemonId(this.id)
                  .subscribe (pokemon => {this.pokemon = pokemon[0];
                    this.nombrePokemon = this.pokemon.name;
                    this.tipoPokemon = this.pokemon.type;
                    this.imagePokemon = this.pokemon.image;
                    this.hpPokemon = this.pokemon.hp;
                    this.ataquePokemon = this.pokemon.attack;
                    this.defensaPokemon = this.pokemon.defense})
               }

  ngOnInit(): void {
  }

  onSubmit(){
    this.pokemon = this.savePokemonNew();
    this.pokemonService.putPokemon(this.id,this.pokemon)
    this.router.navigate([' ']);
  }

  savePokemonNew(){
    const savePokemon = {
      id: this.id,
      name: this.nombrePokemon,
      type: this.tipoPokemon,
      image: this.imagePokemon,
      hp: this.hpPokemon,
      attack: this.ataquePokemon,
      defense: this.defensaPokemon,
      idAuthor: this.pokemon.idAuthor,
      updatedAt: this.hoy.toString()
    }
    return savePokemon;
  }


}
