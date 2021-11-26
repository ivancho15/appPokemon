import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Pokemon } from '../../models/pokemon.model';
import { CrudPokemonService } from '../../services/crud-pokemon.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemonForm!: FormGroup;
  id!: number;
  pokemon!: Pokemon;
  hoy = new Date();
  
  tipos: string [] = [
    'water','fire','normal','bug','poison'
  ]
  
  constructor(private pf: FormBuilder, 
              private pokemonService: CrudPokemonService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params
                .subscribe(param => {
                  this.id = param["id"];
                  this.pokemonService.getPokemonId(this.id)
                  .subscribe ( pokemon => {this.pokemon = pokemon;
                                console.log(this.pokemon)})
                })

               }

  ngOnInit(): void {
    this.pokemonForm = this.pf.group({
      id: null,
      name: [ ' ', Validators.required],
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
    this.pokemonService.putPokemon(this.id ,this.pokemon)
    this.pokemonForm.reset()
    this.router.navigate([' ']);
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
      updatedAt: this.hoy.toString()
    }
    return savePokemon;
  }

}
