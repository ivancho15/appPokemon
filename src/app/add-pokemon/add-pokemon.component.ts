import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Pokemon } from '../models/pokemon.model';
import { CrudPokemonService } from '../services/crud-pokemon.service';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  pokemonForm!: FormGroup;
  
  pokemon!: Pokemon;
  hoy = new Date();
  
  tipos: string [] = [
    'water','fire','normal','bug','poison'
  ]
  
  constructor(private pf: FormBuilder, 
              private pokemonService: CrudPokemonService) { 
  }

  ngOnInit(): void {
    this.pokemonForm = this.pf.group({
      id: null,
      name: ['', Validators.required],
      type: ['', Validators.required],
      hp: [null, Validators.required],
      attack:  [null, Validators.required],
      image: ['', Validators.required],
      defense: ['', Validators.required],
      idAuthor:  null,
      createdAt: '',
      updatedAt: ''
    });

  }


  onSubmit(){
    this.pokemon = this.savePokemon();
    this.pokemonService.postPokemon(this.pokemon)
    this.pokemonForm.reset()
  }



  savePokemon(){
    const savePokemon = {
      name: this.pokemonForm.get('name')?.value,
      type: this.pokemonForm.get('type')?.value,
      image: this.pokemonForm.get('image')?.value,
      hp: this.pokemonForm.get('hp')?.value,
      attack: this.pokemonForm.get('attack')?.value,
      defense: this.pokemonForm.get('defense')?.value,
      idAuthor: 3,
      createdAt: this.hoy.toString(),
      updatedAt: this.hoy.toString()
    }
    return savePokemon;
  }
}
