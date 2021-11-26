import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class CrudPokemonService {

  preUrl = "https://pokemon-pichincha.herokuapp.com/pokemons/"
  constructor(private http: HttpClient) { }

  getPokemon(name$: string){
    const url = `${this.preUrl}?name=${name$}`
    return this.http.get<Pokemon[]>(url)
  }

  postPokemon(pokemon:Pokemon){
    this.http.post<any>(this.preUrl, pokemon).subscribe(data => {
     console.log(data);
    })
  }

  delPokemon(id$: number){
    this.http.delete(this.preUrl + id$).subscribe(data => {
      console.log(data);
    });
  }

}
